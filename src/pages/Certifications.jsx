import { useState } from "react";
import { certifications } from "../data/content";
import { IconAward, IconArrowUpRight } from "../components/Icons";
import "./Credentials.css";

const featuredCertificateFiles = [
  "/certificates/nasa-space-apps-2026.pdf",
  "/certificates/nasa-open-science-101.pdf",
  "/certificates/nasa-open-science-essentials.pdf",
  "/certificates/astronomy-exploring-time-and-space.pdf",
];

const orderedCertifications = [
  ...featuredCertificateFiles
    .map((file) => certifications.find((certificate) => certificate.file === file))
    .filter(Boolean),
  ...certifications.filter((certificate) => !featuredCertificateFiles.includes(certificate.file)),
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? orderedCertifications : orderedCertifications.slice(0, 4);

  return (
    <section id="certifications" className="page credentials" aria-labelledby="certifications-title">
      <div className="section-heading credentials__heading"><IconAward /><h2 id="certifications-title">Certifications</h2></div>
      <div className="section-rule credentials__rule" />
      <div className="credentials__list" id="certifications-list">
        {visibleCertifications.map((certificate) => (
          <article className={`bracket-panel credential-card${showAll ? "" : " credential-card--preview"}`} key={certificate.file}>
            <h3 className="credential-card__title">{certificate.title}</h3>
            <div className="credential-card__meta">
              <p className="credential-card__issuer">{certificate.issuer}</p>
              {certificate.date && <time dateTime={certificate.dateTime}>{certificate.date}</time>}
            </div>
            {showAll && (
              <>
                <p className="credential-card__kind">{certificate.credential}</p>
                <p className="credential-card__description">{certificate.description}</p>
              </>
            )}
            <a className="credential-link" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`View certificate for ${certificate.title} (PDF, opens in a new tab)`}>
              View certificate (PDF)<IconArrowUpRight />
            </a>
          </article>
        ))}
      </div>
      {orderedCertifications.length > 4 && (
        <div className="credentials__toggle-wrap">
          <button
            className="credentials__toggle"
            type="button"
            aria-expanded={showAll}
            aria-controls="certifications-list"
            onClick={() => setShowAll((current) => !current)}
          >
            <span className="credentials__toggle-icon" aria-hidden="true">{showAll ? "⌃" : "⌄"}</span>
            {showAll ? "Show Less" : `View All ${orderedCertifications.length} Certifications`}
          </button>
        </div>
      )}
    </section>
  );
}
