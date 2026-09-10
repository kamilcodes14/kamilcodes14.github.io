import { education } from "../data/content";
import { IconGrad } from "../components/Icons";
import "./About.css";

export default function Education() {
  return (
    <section id="education" className="page">
      <div className="section-heading section-heading--center"><IconGrad /><h2>Education</h2></div>
      <div className="section-rule section-rule--center" />
      <div className="bracket-panel about__education">
        <h3 className="about__school">{education.school}</h3>
        <p className="about__degree">{education.degree}</p>
        <p className="about__expected">{education.expected} · {education.location}</p>
      </div>
    </section>
  );
}
