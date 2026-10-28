import { useEffect, useRef, useState } from "react";

// Decorative particle paths, aligned to the black hole in the existing artwork.
export default function BlackHoleStars() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, scale = 1, cx = 0, cy = 0;
    let frame = 0, lastTime = 0, elapsed = 0, visible = true;
    const particles = Array.from({ length: 64 }, (_, index) => ({
      phase: Math.random(),
      angle: Math.random() * Math.PI * 2,
      duration: 15 + Math.random() * 18,
      size: 0.6 + Math.random() * 1.1,
      captured: index % 3 !== 0,
      lane: Math.random(),
    }));

    function position(particle, progress) {
      if (!particle.captured) {
        return { x: width * (1.2 - progress * 1.4),
          y: height * particle.lane + Math.sin(progress * Math.PI) * 32 };
      }
      const radius = (Math.max(width, height) * 0.75) * (1 - progress) + 65 * scale;
      const angle = particle.angle + progress * 2.7;
      return { x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius * 0.82 };
    }

    function paint() {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        const progress = (particle.phase + elapsed / particle.duration) % 1;
        const point = position(particle, progress);
        const tail = position(particle, Math.max(0, progress - 0.008));
        const fade = Math.min(1, progress * 12, (1 - progress) * 7);
        context.globalAlpha = fade * (particle.captured ? 0.7 : 0.45);
        context.strokeStyle = particle.captured ? "#e9c88e" : "#dce6f5";
        context.lineWidth = particle.size * 0.65;
        context.beginPath();
        context.moveTo(tail.x, tail.y);
        context.lineTo(point.x, point.y);
        context.stroke();
        context.fillStyle = "#fff2d7";
        context.beginPath();
        context.arc(point.x, point.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    }

    function tick(now) {
      if (lastTime) elapsed += Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      paint();
      frame = requestAnimationFrame(tick);
    }

    function syncMotion() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!paused && !reducedMotion.matches && visible && !document.hidden) {
        frame = requestAnimationFrame(tick);
      } else paint();
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Match background-size: cover and background-position: center 30%.
      scale = Math.max(width / 1080, height / 1440);
      cx = (width - 1080 * scale) / 2 + 580 * scale;
      cy = (height - 1440 * scale) * 0.3 + 550 * scale;
      paint();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
    });
    intersectionObserver.observe(canvas);
    reducedMotion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncMotion);
    resize();
    syncMotion();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncMotion);
    };
  }, [paused]);

  return <>
    <canvas ref={canvasRef} className="hero__stars" aria-hidden="true" />
    <button type="button" className="hero__motion-toggle" onClick={() => setPaused(!paused)}
      aria-label={paused ? "Play star animation" : "Pause star animation"}>
      {paused ? "Play stars" : "Pause stars"}
    </button>
  </>;
}
