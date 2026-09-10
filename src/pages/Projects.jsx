import { motion } from "framer-motion";
import { projects } from "../data/content";
import { IconBulb, IconArrowUpRight } from "../components/Icons";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="page projects">
      <div className="section-heading"><IconBulb /><h2>Projects</h2></div>
      <div className="section-rule" />

      <div className="projects__grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card bracket-panel"
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <div className="project-card__head">
              <span className="tag">{p.tag}</span>
              {p.live && <span className="project-card__live"><span className="dot" /> Live</span>}
            </div>
            <h3 className="project-card__title">{p.name}</h3>
            <p className="project-card__blurb">{p.blurb}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-card__links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link">
                  View Live <IconArrowUpRight />
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link project-card__link--muted">
                GitHub <IconArrowUpRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
