import { publications, profile } from "../data/content";
import { IconResearch, IconArrowUpRight } from "../components/Icons";
import "./Credentials.css";

export default function Research() {
  return (
    <section id="research" className="page credentials" aria-labelledby="research-title">
      <div className="section-heading credentials__heading"><IconResearch /><h2 id="research-title">Research &amp; Publications</h2></div>
      <div className="section-rule credentials__rule" />
      <div className="credentials__list">
        {publications.map((publication) => (
          <article className="bracket-panel publication-card" key={publication.id}>
            <p className="publication-card__type">{publication.type}</p>
            <h3 className="publication-card__title">{publication.title}</h3>
            {publication.subtitle && <p className="publication-card__subtitle">{publication.subtitle}</p>}
            <p className="publication-card__author">{profile.name} · Author</p>
            <p className="publication-card__meta">{publication.meta}</p>
            <p className="publication-card__description">{publication.description}</p>
            <a className="credential-link" href={publication.href} target="_blank" rel="noreferrer">{publication.linkLabel}<IconArrowUpRight /></a>
            <ul className="publication-card__tags" aria-label="Topics">
              {publication.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
