import { certifications } from "../data/content";
import { IconAward, IconArrowUpRight } from "../components/Icons";
import "./Credentials.css";

export default function Certifications() {
  return (
    <section id="certifications" className="page credentials" aria-labelledby="certifications-title">
      <div className="section-heading credentials__heading"><IconAward /><h2 id="certifications-title">Certifications</h2></div>
      <div className="section-rule credentials__rule" />
      <div className="credentials__list">
        {certifications.map((certificate) => (
          <article className="bracket-panel credential-card" key={certificate.file}>
            <h3 className="credential-card__title">{certificate.title}</h3>
            <div className="credential-card__meta">
              <p className="credential-card__issuer">{certificate.issuer}</p>
              {certificate.date && <time dateTime={certificate.dateTime}>{certificate.date}</time>}
            </div>
            <p className="credential-card__kind">{certificate.credential}</p>
            <p className="credential-card__description">{certificate.description}</p>
            <a className="credential-link" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`View certificate for ${certificate.title} (PDF, opens in a new tab)`}>
              View certificate (PDF)<IconArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
