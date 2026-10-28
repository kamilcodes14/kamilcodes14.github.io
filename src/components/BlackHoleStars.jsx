import { useEffect, useRef, useState } from "react";
import { createSpaceMindScene } from "./spaceMindScene";
import { createStarFallback } from "./starFallback";

export default function BlackHoleStars() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  // Autoplay is intentional for this portfolio; visitors can pause at any time.
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  const [fallback, setFallback] = useState(false);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    try {
      const scene = fallback ? createStarFallback(canvasRef.current) : createSpaceMindScene(canvasRef.current);
      sceneRef.current = scene;
      scene.setPaused(pausedRef.current);
    } catch {
      if (!fallback) setFallback(true);
      else setAvailable(false);
    }
    return () => { sceneRef.current?.dispose(); sceneRef.current = null; };
  }, [fallback]);
  useEffect(() => {
    pausedRef.current = paused;
    sceneRef.current?.setPaused(paused);
  }, [paused]);
  return <>
    <canvas key={fallback ? "canvas-2d" : "webgl"} ref={canvasRef} className="hero__stars" aria-hidden="true" style={available ? undefined : { display: "none" }} />
    {available && <button type="button" className="hero__motion-toggle" onClick={() => setPaused(value => !value)}
      aria-label={paused ? "Play star animation" : "Pause star animation"}>
      {paused ? "Play stars" : "Pause stars"}
    </button>}
  </>;
}
