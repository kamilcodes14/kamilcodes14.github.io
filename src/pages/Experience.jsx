import { motion } from "framer-motion";
import { experience } from "../data/content";
import { IconBriefcase } from "../components/Icons";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="page experience">
      <div className="exp-flourish">
        <span className="exp-flourish__line" />
        <span className="exp-flourish__dot" />
        <div className="exp-flourish__heading"><IconBriefcase /><h2>Experience</h2></div>
        <span className="exp-flourish__dot" />
        <span className="exp-flourish__line" />
      </div>
      <div className="section-rule section-rule--center" />

      <div className="exp-timeline">
        {experience.map((job, i) => (
          <motion.div
            className={`exp-item ${i % 2 === 0 ? "exp-item--right" : "exp-item--left"}`}
            key={job.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="exp-item__badge">{job.badge}</div>
            <div className="exp-item__card bracket-panel">
              <div className="exp-card__head">
                <div>
                  <h3 className="exp-card__org">{job.org}</h3>
                  <p className="exp-card__role">{job.role}</p>
                </div>
                <div className="exp-card__meta">
                  <span className={`exp-card__period ${job.current ? "exp-card__period--current" : ""}`}>
                    {job.period}
                  </span>
                  <span className="exp-card__location">{job.location}</span>
                </div>
              </div>
              <ul className="exp-card__bullets">
                {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
              <div className="exp-card__tech">
                {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
