import { motion } from "framer-motion";
import { about, profile, orgs } from "../data/content";
import { IconBook } from "../components/Icons";
import kamilPhoto from "../assets/kamil-photo.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="page about">
      <div className="section-heading section-heading--center"><IconBook /><h2>About Me</h2></div>
      <div className="section-rule section-rule--center" />

      <motion.div
        className="about__intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="about__photo-frame">
          <img src={kamilPhoto} alt={profile.name} className="about__photo" />
        </div>

        {about.bio.map((para, i) => (
          <p key={i} className="about__para">{para}</p>
        ))}
      </motion.div>

      <div className="orgs-marquee">
        <span className="orgs-marquee__label">Organizations &amp; Companies</span>
        <div className="orgs-marquee__track">
          <div className="orgs-marquee__row" aria-hidden="false">
            {orgs.map((o) => <span key={o} className="orgs-marquee__item">{o}</span>)}
          </div>
          <div className="orgs-marquee__row" aria-hidden="true">
            {orgs.map((o) => <span key={o + "-dup"} className="orgs-marquee__item">{o}</span>)}
          </div>
        </div>
      </div>

      <div className="about__grid">
        <div className="bracket-panel about__achievement">
          <span className="eyebrow">Achievement</span>
          <p className="about__achievement-text">{profile.achievement}</p>
        </div>

        <div className="bracket-panel about__facts">
          <span className="eyebrow">Quick Facts</span>
          <dl className="facts-list">
            {about.facts.map((f) => (
              <div className="facts-list__row" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
