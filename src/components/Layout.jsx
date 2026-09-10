import { useState } from "react";
import { nav, profile } from "../data/content";
import "./Layout.css";

function LinkedInBadge() {
  return (
    <span className="linkedin-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="#0A66C2" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#home" className="site-logo" onClick={() => setOpen(false)}>
            {profile.initials}
          </a>

          <div className="site-header__actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInBadge />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="plain-icon" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <button
              className="plain-icon menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>

          <nav className={`site-nav ${open ? "site-nav--open" : ""}`}>
            {nav.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="site-nav__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="site-footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </div>
      </footer>
    </>
  );
}
