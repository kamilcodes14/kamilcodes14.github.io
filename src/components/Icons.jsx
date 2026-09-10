/* Shared line-icon set — thin stroke style, matches the gold accent theme */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function IconStar(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M12 3l2.4 5.6L20 10l-4.4 3.8L16.8 20 12 16.6 7.2 20l1.2-6.2L4 10l5.6-1.4L12 3z" />
    </svg>
  );
}

export function IconBook(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </svg>
  );
}

export function IconGrad(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M21 9.5v5" />
    </svg>
  );
}

export function IconBriefcase(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function IconBulb(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.7 10.7c.6.5 1 1.2 1.1 2h5.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function IconCode(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconTrophy(props) {
  return (
    <svg {...base} width="22" height="22" {...props}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3" />
      <path d="M12 14v3" />
      <path d="M9 20h6" />
      <path d="M9.5 17h5l.5 3H9l.5-3Z" />
    </svg>
  );
}

export function IconPaper(props) {
  return (
    <svg {...base} width="22" height="22" {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12.5h5M9.5 15.5h5M9.5 9.5h2" />
    </svg>
  );
}

export function IconRocket(props) {
  return (
    <svg {...base} width="22" height="22" {...props}>
      <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 3.7-1 5l-3 3-3-3c-.5-1.3-1-3-1-5 0-3.5 1.5-7 4-9Z" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M9 15l-3 1 1-3" />
      <path d="M15 15l3 1-1-3" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function IconArrowUpRight(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
