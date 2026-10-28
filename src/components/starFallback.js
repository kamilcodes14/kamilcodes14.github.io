// Perspective stars for browsers where WebGL is unavailable.
export function createStarFallback(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas rendering unavailable');
  const stars = Array.from({ length: 650 }, () => ({
    x: (Math.random() - .5) * 350,
    y: (Math.random() - .5) * 350,
    z: 20 + Math.random() * 380,
  }));
  let width = 0, height = 0, frame = null, previous = 0, paused = false;
  function draw(dt = 0) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(1, 1, 5, .65)';
    ctx.fillRect(0, 0, width, height);
    const focal = height / (2 * Math.tan(Math.PI / 6));
    for (const star of stars) {
      star.z -= dt * 158.4;
      if (star.z < 5) star.z = 400;
      const x = width / 2 + star.x * focal / star.z;
      const y = height / 2 + star.y * focal / star.z;
      const radius = Math.min(2.3, .225 * focal / star.z);
      ctx.fillStyle = `rgba(215,230,255,${.9 * Math.exp(-.0035 * star.z)})`;
      ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    }
  }
  function tick(now) {
    frame = requestAnimationFrame(tick);
    if (!previous) { previous = now; return; }
    if (now - previous < 1000 / 30) return;
    const dt = Math.min((now - previous) / 1000, .075);
    previous = now; draw(dt);
  }
  function restart() {
    cancelAnimationFrame(frame); frame = null; previous = 0;
    draw();
    if (!paused && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function resize() {
    width = canvas.clientWidth; height = canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0); draw();
  }
  const observer = new ResizeObserver(resize); observer.observe(canvas);
  document.addEventListener('visibilitychange', restart);
  resize(); restart();
  return {
    setPaused(value) { paused = value; restart(); },
    dispose() { cancelAnimationFrame(frame); observer.disconnect(); document.removeEventListener('visibilitychange', restart); },
  };
}
