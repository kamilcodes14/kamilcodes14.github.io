import { motion } from "framer-motion";
import { profile, education, heroBadges } from "../data/content";
import { IconStar, IconGrad, IconPin } from "../components/Icons";
import heroBg from "../assets/hero-bg.jpg";
import "./Home.css";

export default function Home() {
  const degreeShort = education.degree.replace("Bachelor of Science, ", "");

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay" />
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <IconStar className="hero__sparkle" />
        <span className="hero__tagline">{profile.tagline}</span>
        <h1 className="hero__name">{profile.name}</h1>

        <div className="hero__meta">
          <span className="hero__meta-item"><IconGrad /> {degreeShort}, UMT</span>
          <span className="hero__meta-divider" />
          <span className="hero__meta-item"><IconPin /> {profile.location}</span>
        </div>

        <div className="hero__badges">
          {heroBadges.map((b) => (
            <span key={b} className="hero__badge">{b}</span>
          ))}
        </div>

        <div className="hero__cta">
          <a href="#projects" className="btn btn-primary">
            <IconStar width="16" height="16" /> Explore My Work
          </a>
          <a href="#contact" className="btn btn-outline-light">Get in Touch</a>
        </div>
      </motion.div>

      <div className="hero__scroll-hint" aria-hidden="true">⌄</div>
    </section>
  );
}
