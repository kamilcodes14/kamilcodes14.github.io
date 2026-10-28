import { useEffect, useRef, useState } from "react";
import { createSpaceMindScene } from "./spaceMindScene";

export default function BlackHoleStars() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [motionPreference, setMotionPreference] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const paused = motionPreference ?? reducedMotion;
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    query.addEventListener("change", update);
    update();
    return () => query.removeEventListener("change", update);
  }, []);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    try { sceneRef.current = createSpaceMindScene(canvasRef.current, { paused: window.matchMedia("(prefers-reduced-motion: reduce)").matches }); }
    catch { setAvailable(false); }
    return () => { sceneRef.current?.dispose(); sceneRef.current = null; };
  }, []);
  useEffect(() => { sceneRef.current?.setPaused(paused); }, [paused]);
  return <>
    <canvas ref={canvasRef} className="hero__stars" aria-hidden="true" style={available ? undefined : { display: "none" }} />
    {available && <button type="button" className="hero__motion-toggle" onClick={() => setMotionPreference(!paused)}
      aria-label={paused ? "Play star animation" : "Pause star animation"}>
      {paused ? "Play stars" : "Pause stars"}
    </button>}
  </>;
}
