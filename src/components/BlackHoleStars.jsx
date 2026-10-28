import { useEffect, useRef, useState } from "react";
import { createSpaceMindScene } from "./spaceMindScene";

export default function BlackHoleStars() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    try { sceneRef.current = createSpaceMindScene(canvasRef.current); }
    catch { setAvailable(false); }
    return () => { sceneRef.current?.dispose(); sceneRef.current = null; };
  }, []);
  useEffect(() => { sceneRef.current?.setPaused(paused); }, [paused]);
  return <>
    <canvas ref={canvasRef} className="hero__stars" aria-hidden="true" style={available ? undefined : { display: "none" }} />
    {available && <button type="button" className="hero__motion-toggle" onClick={() => setPaused(!paused)}
      aria-label={paused ? "Play star animation" : "Pause star animation"}>
      {paused ? "Play stars" : "Pause stars"}
    </button>}
  </>;
}
