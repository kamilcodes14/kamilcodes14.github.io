import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import { IconMail } from "../components/Icons";
import "./Contact.css";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  const [notice, setNotice] = useState("");
  const [draft, setDraft] = useState(null);

  function prepareDraft(form) {
    const fields = new FormData(form);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const message = String(fields.get("message") || "").trim();
    if (!name || !email || !message) {
      setNotice("Please enter your name, email address, and message.");
      return null;
    }
    return {
      subject: `Portfolio enquiry from ${name}`,
      body: `${message}\n\nFrom: ${name}\nReply email: ${email}`,
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const next = prepareDraft(event.currentTarget);
    if (!next) return;
    setDraft(next);
    setNotice("Your email draft is ready. Complete sending in your email app. If it did not open, use Copy message below.");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(next.subject)}&body=${encodeURIComponent(next.body)}`;
  }

  async function copyMessage(event) {
    const form = event.currentTarget.form;
    if (!form.reportValidity()) return;
    const next = prepareDraft(form);
    if (!next) return;
    setDraft(next);
    try {
      await navigator.clipboard.writeText(`To: ${profile.email}\nSubject: ${next.subject}\n\n${next.body}`);
      setNotice("Message copied. Paste it into your email service and send it to " + profile.email + ".");
    } catch {
      setNotice("Copy is unavailable in this browser. Select and copy the prepared message below.");
    }
  }

  return (
    <section id="contact" className="page contact">
      <div className="section-heading section-heading--center"><IconMail /><h2>Get in Touch</h2></div>
      <div className="section-rule section-rule--center" />

      <motion.div
        className="contact__wrap"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="contact__lede">
          Open to internships, collaborations, and interesting problems. Get in touch by email using the form below.
        </p>

        <div className="bracket-panel contact__panel">
          <form className="contact__form" onSubmit={handleSubmit} aria-describedby="contact-help">
            <p id="contact-help" className="contact__help">This form prepares an email to <a href={`mailto:${profile.email}`}>{profile.email}</a>. You send it from your email app.</p>
            <label className="contact__label" htmlFor="name">Full name</label>
            <input className="contact__input" type="text" id="name" name="name" autoComplete="name" maxLength={100} required />

            <label className="contact__label" htmlFor="email">Email address</label>
            <input className="contact__input" type="email" id="email" name="email" autoComplete="email" maxLength={254} required />

            <label className="contact__label" htmlFor="message">Your message</label>
            <textarea className="contact__input contact__textarea" id="message" name="message" rows={6} maxLength={3000} required />

            <div className="contact__actions">
              <button className="btn btn-primary contact__submit" type="submit">Open email app →</button>
              <button className="btn" type="button" onClick={copyMessage}>Copy message</button>
            </div>
            <p className="contact__notice" role="status">{notice}</p>
            {draft && <details className="contact__draft">
              <summary>View prepared message</summary>
              <textarea className="contact__input contact__textarea" aria-label="Prepared email message" readOnly value={`To: ${profile.email}\nSubject: ${draft.subject}\n\n${draft.body}`} rows={8} />
            </details>}
          </form>
        </div>

        <div className="contact__socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn contact__social-btn">
            <LinkedInIcon /> Follow on LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn contact__social-btn">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
