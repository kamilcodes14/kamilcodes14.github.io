import * as THREE from 'three';

// Starfield, event horizon, halo and accretion-disk shaders from SpaceMind.
// Only lifecycle and container sizing are adapted for the portfolio hero.
export function createSpaceMindScene(canvas, { paused: initialPaused = false } = {}) {
  const mobile = canvas.clientWidth < 700;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x010105, 0.0035);
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({canvas, antialias: !mobile, alpha: false, powerPreference: 'low-power'});
  renderer.setClearColor(0x010105);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.19;
  let raf = null, last = 0, elapsed = 0, paused = initialPaused, visible = true, lost = false;
  let mouseX = 0, mouseY = 0;
    // --- CONTINUOUS STARFIELD & DUST ---
    const STAR_COUNT = 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(STAR_COUNT * 3);
    const starCol = new Float32Array(STAR_COUNT * 3);
 
    for (let i = 0; i < STAR_COUNT; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 350;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 350;
      starPos[i * 3 + 2] = -Math.random() * 400;
 
      const shade = 0.7 + Math.random() * 0.3;
      starCol[i * 3]     = shade;
      starCol[i * 3 + 1] = shade + 0.1;
      starCol[i * 3 + 2] = 1.0;
    }
 
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
 
    const starMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
 
    const starParticles = new THREE.Points(starGeo, starMat);
    scene.add(starParticles);
 
    // --- BLACK HOLE PLACEMENT (deep background, far behind the asteroid/star field) ---
    // BH_SCALE sets how big it looks; BH_X / BH_Y move it on screen.
    const BH_DIST = 650, BH_SCALE = 26, BH_X = -190, BH_Y = 70;
    const blackHoleWorld = new THREE.Group();
    blackHoleWorld.position.set(BH_X, BH_Y, -BH_DIST);
    blackHoleWorld.scale.setScalar(BH_SCALE);
    blackHoleWorld.rotation.x = THREE.MathUtils.degToRad(9); // tilt so the disk is seen from slightly above
    scene.add(blackHoleWorld);

 
    // --- Relativistic Realistic Black Hole ---
    // This uses multiple objects and a complex shader pass to simulate lensing
 
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.position.set(0, 0, 0); // Position at center for this example
    blackHoleWorld.add(blackHoleGroup);
 
    // 1. The Core (Event Horizon) - Perfect dark sphere
    const coreGeo = new THREE.SphereGeometry(3.0, 40, 24);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    blackHoleGroup.add(coreMesh);
 
    // 2. Lensed halo: glowing arc around the horizon (faces the camera, sits behind the core)
    const haloMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec2 vP;
        void main() {
          vP = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vP;
        uniform float time;
        void main() {
          float r = length(vP);
          float d = max(r - 3.0, 0.0);
          float glow = exp(-d * 1.6) * 1.4;
          // brighter above and below, like light bent over the top and bottom of the disk
          float topBottom = 0.45 + 0.55 * abs(vP.y) / max(r, 0.001);
          float pulse = 0.95 + 0.05 * sin(time * 0.8);
          vec3 col = mix(vec3(1.0, 0.45, 0.1), vec3(1.0, 0.85, 0.5), exp(-d * 3.0));
          gl_FragColor = vec4(col * glow * topBottom * pulse, glow * topBottom);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });
    const haloMesh = new THREE.Mesh(new THREE.RingGeometry(2.0, 9, 128, 1), haloMat);
    haloMesh.position.z = -3.5;
    blackHoleGroup.add(haloMesh);
 
    // 3. Accretion disk: flat ring seen at a shallow angle
    function createDiskTexture() {
      const cv = document.createElement('canvas');
      cv.width = 1024; cv.height = 256;
      const ctx = cv.getContext('2d');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, 1024, 256);
      for (let i = 0; i < 2500; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 256;
        const len = 20 + Math.random() * 120;
        const alpha = Math.random() * 0.35 + 0.1;
        const c = [`rgba(255,120,30,${alpha})`, `rgba(255,190,100,${alpha})`, `rgba(255,235,200,${alpha})`];
        ctx.fillStyle = c[Math.floor(Math.random() * 3)];
        ctx.fillRect(x, y, len, 1 + Math.random() * 2);
      }
      const t = new THREE.CanvasTexture(cv);
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.RepeatWrapping;
      return t;
    }
    const diskTex = createDiskTexture();
 
    const diskMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, diskTexture: { value: diskTex } },
      vertexShader: `
        varying vec2 vUv;
        varying float vDoppler;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          // approaching side (left) is brighter, receding side (right) is dimmer
          vDoppler = 1.0 + 0.9 * clamp(-wp.x / 10.0, -1.0, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform sampler2D diskTexture;
        varying vec2 vUv;
        varying float vDoppler;
        void main() {
          // inner gas orbits faster than outer gas
          float speed = 0.06 / (0.25 + vUv.y);
          vec4 tex = texture2D(diskTexture, vec2(vUv.x * 3.0 + time * speed, vUv.y));
          float heat = 1.0 - vUv.y;
          vec3 col = mix(vec3(1.0, 0.4, 0.08), vec3(1.0, 0.9, 0.65), heat * heat);
          float intensity = (0.35 + tex.r * 1.6) * vDoppler * (0.4 + heat * 1.4);
          float edge = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.7, 1.0, vUv.y));
          gl_FragColor = vec4(col * intensity, edge);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
 
    const DISK_IN = 3.6, DISK_OUT = 11;
    const diskGeo = new THREE.RingGeometry(DISK_IN, DISK_OUT, 160, 12);
    const dp = diskGeo.attributes.position, du = diskGeo.attributes.uv;
    for (let i = 0; i < dp.count; i++) {
      const x = dp.getX(i), y = dp.getY(i);
      du.setXY(i, Math.atan2(y, x) / (Math.PI * 2) + 0.5, (Math.hypot(x, y) - DISK_IN) / (DISK_OUT - DISK_IN));
    }
    diskGeo.rotateX(-Math.PI / 2);
    const diskMesh = new THREE.Mesh(diskGeo, diskMat);
    blackHoleGroup.rotation.z = THREE.MathUtils.degToRad(-12);
    blackHoleGroup.position.x = 2;
    blackHoleGroup.add(diskMesh);
 

  function render() { if (!lost) renderer.render(scene, camera); }
  function animate(now) {
    raf = requestAnimationFrame(animate);
    if (!last) { last = now; return; }
    if (now - last < 1000 / (canvas.clientWidth < 700 ? 30 : 45)) return;
    const dt = Math.min((now - last) / 1000, .075);
    last = now;
    const step = dt * 60; // SpaceMind default speed: 0.5.
    elapsed += dt;
    camera.position.x += (mouseX * 5 - camera.position.x) * (1 - Math.pow(.95, step));
    camera.position.y += (-mouseY * 4 - camera.position.y) * (1 - Math.pow(.95, step));
    camera.lookAt(0, 0, -50);
    const positions = starGeo.attributes.position.array;
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3 + 2] += 1.2 * step * 2.2;
      if (positions[i * 3 + 2] > 20) positions[i * 3 + 2] = -350;
    }
    starGeo.attributes.position.needsUpdate = true;
    diskMat.uniforms.time.value = elapsed;
    haloMat.uniforms.time.value = elapsed;
    render();
  }
  function restart() {
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null; last = 0;
    if (lost || document.hidden || !visible) return;
    render();
    if (!paused) raf = requestAnimationFrame(animate);
  }
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, w < 700 ? 1 : 1.5));
    renderer.setSize(w, h, false);
    blackHoleWorld.position.x = w < 700 ? -95 : -190;
    blackHoleWorld.scale.setScalar(w < 700 ? 18 : 26);
    starGeo.setDrawRange(0, w < 700 ? 1200 : STAR_COUNT);
    restart();
  }
  function pointer(event) {
    const bounds = canvas.getBoundingClientRect();
    mouseX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    mouseY = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
  }
  function contextLost(event) { event.preventDefault(); lost = true; restart(); }
  function contextRestored() { lost = false; resize(); }
  const sizeObserver = new ResizeObserver(resize);
  sizeObserver.observe(canvas);
  const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
  visibilityObserver.observe(canvas);
  canvas.parentElement.addEventListener('pointermove', pointer);
  document.addEventListener('visibilitychange', restart);
  canvas.addEventListener('webglcontextlost', contextLost);
  canvas.addEventListener('webglcontextrestored', contextRestored);
  resize();
  return {
    setPaused(value) { paused = value; restart(); },
    dispose() {
      if (raf !== null) cancelAnimationFrame(raf);
      sizeObserver.disconnect(); visibilityObserver.disconnect();
      canvas.parentElement?.removeEventListener('pointermove', pointer);
      document.removeEventListener('visibilitychange', restart);
      canvas.removeEventListener('webglcontextlost', contextLost);
      canvas.removeEventListener('webglcontextrestored', contextRestored);
      scene.traverse(object => { object.geometry?.dispose(); object.material?.dispose(); });
      diskTex.dispose(); renderer.dispose();
    }
  };
}
