import { education } from "../data/content";
import { IconGrad, IconBook } from "../components/Icons";
import "./About.css";
import "./Credentials.css";

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
      <div className="bracket-panel coursework">
        <h3 className="coursework__heading"><IconBook />Relevant Coursework</h3>
        <ul className="coursework__list">
          {education.coursework.map((course) => <li key={course}>{course}</li>)}
        </ul>
      </div>
    </section>
  );
}
