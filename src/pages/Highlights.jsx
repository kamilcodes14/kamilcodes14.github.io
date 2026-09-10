import { useState } from "react";
import { motion } from "framer-motion";
import { highlights } from "../data/content";
import { IconStar, IconTrophy, IconPaper, IconRocket } from "../components/Icons";
import "./Highlights.css";

const highlightIcons = { trophy: IconTrophy, paper: IconPaper, rocket: IconRocket };
const N = highlights.length;

function shortestDiff(i, active, n) {
  let diff = i - active;
  if (diff > n / 2) diff -= n;
  if (diff < -n / 2) diff += n;
  return diff;
}

export default function Highlights() {
  const [active, setActive] = useState(0);

  const go = (dir) => setActive((a) => (a + dir + N) % N);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <section id="highlights" className="page">
      <div className="section-heading"><IconStar /><h2>Highlights</h2></div>
      <div className="section-rule" />

      <div className="carousel">
        <button className="carousel__arrow carousel__arrow--prev" onClick={() => go(-1)} aria-label="Previous highlight">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <motion.div
          className="carousel__stage"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon];
            const diff = shortestDiff(i, active, N);
            const abs = Math.abs(diff);
            const visible = abs <= 1;
            const style = {
              transform: `translateX(calc(-50% + ${diff * 62}%)) scale(${diff === 0 ? 1 : 0.84})`,
              opacity: diff === 0 ? 1 : abs === 1 ? 0.32 : 0,
              zIndex: diff === 0 ? 3 : 2 - abs,
              pointerEvents: diff === 0 ? "auto" : "none",
            };
            return (
              <div
                className={`carousel__card bracket-panel ${diff === 0 ? "carousel__card--active" : ""}`}
                key={h.title}
                style={style}
                aria-hidden={diff !== 0}
              >
                {visible && (
                  <>
                    <div className="highlight-card__icon"><Icon /></div>
                    <h3 className="highlight-card__title">{h.title}</h3>
                    <span className="highlight-card__org">{h.org}</span>
                    <p className="highlight-card__text">{h.text}</p>
                  </>
                )}
              </div>
            );
          })}
        </motion.div>

        <button className="carousel__arrow carousel__arrow--next" onClick={() => go(1)} aria-label="Next highlight">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="carousel__dots">
        {highlights.map((h, i) => (
          <button
            key={h.title}
            className={`carousel__dot ${i === active ? "carousel__dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to highlight ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
