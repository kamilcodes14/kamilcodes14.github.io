import { motion } from "framer-motion";
import { skills } from "../data/content";
import { IconCode } from "../components/Icons";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="page skills">
      <div className="section-heading"><IconCode /><h2>Technical Skills</h2></div>
      <div className="section-rule" />

      <div className="skills__grid">
        {skills.map((group, i) => (
          <motion.div
            className="skill-panel bracket-panel"
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="skill-panel__title">{group.category}</h3>
            <div className="skill-panel__items">
              {group.items.map((item) => (
                <span key={item} className="tag skill-panel__item">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
