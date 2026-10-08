export const profile = {
  name: "Syed Kamil Taqi Zaidi",
  initials: "K.Z.",
  tagline: "AI/ML Engineer Intern @ PM Accelerator · CS Undergraduate",
  location: "Lahore, Pakistan",
  email: "zaidikamil9@gmail.com",
  linkedin: "https://linkedin.com/in/syedkamilzaidi",
  github: "https://github.com/kamilcodes14",
  summary:
    "CS undergraduate shipping AI/ML systems end-to-end — from enterprise LLM automation to a SETI-style radio-astronomy signal pipeline. 3rd place, National Science Olympiad (Computer Science); published research on AI agent security.",
  achievement: "3rd Nationally — National Science Olympiad, Computer Science",
};

export const heroBadges = [
  "Product Management Accelerator",
  "CodeAlpha",
  "Systems Limited",
  "National Science Olympiad — 3rd Place",
];

export const highlights = [
  {
    icon: "trophy",
    title: "3rd Nationally — Science Olympiad",
    org: "National Science Olympiad, Computer Science",
    text: "Placed 3rd nationally in the Computer Science category, competing against undergraduates from across the country.",
  },
  {
    icon: "paper",
    title: "Published Research",
    org: "SSRN",
    text: "Independent research analyzing the July 2026 OpenAI–Hugging Face autonomous cyber incident — sandbox-escape vectors and containment gaps in autonomous LLM systems.",
  },
  {
    icon: "rocket",
    title: "Lead Engineer, Closet AI",
    org: "Product Management Accelerator",
    text: "Leading System Design Architecture conversations for an AI outfit-styling product and presenting stack and persistence decisions at weekly mentor reviews.",
  },
];

export const orgs = [
  "Product Management Accelerator",
  "CodeAlpha",
  "Systems Limited",
  "UMT Lahore",
  "National Science Olympiad",
];

export const education = {
  school: "University of Management and Technology (UMT)",
  location: "Lahore, Pakistan",
  degree: "Bachelor of Science, Computer Science",
  expected: "Expected October 2028",
  coursework: [
    "Data Structures",
    "Object Oriented Programming",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Computer Architecture",
    "Computer Organization and Assembly Language",
    "Theory of Automata",
    "Discrete Structures",
    "Probability and Statistics",
    "Calculus and Analytical Geometry",
    "Applied Physics",
  ],
};

export const certifications = [
  {
    title: "An introduction to exoplanets",
    issuer: "The Open University · OpenLearn",
    date: "8 October 2026",
    dateTime: "2026-10-08",
    credential: "Statement of Participation · 24-hour course",
    description: "Exoplanet detection, transit methods, planetary properties and habitability.",
    file: "/certificates/introduction-to-exoplanets.pdf",
  },
  {
    title: "Unsolved problems in cosmology",
    issuer: "The Open University · OpenLearn",
    date: "8 October 2026",
    dateTime: "2026-10-08",
    credential: "Statement of Participation · 6-hour course",
    description: "Hot Big Bang cosmology, dark matter, dark energy and inflation.",
    file: "/certificates/unsolved-problems-in-cosmology.pdf",
  },
  {
    title: "When Machines Stop Obeying",
    issuer: "Eliva Press",
    credential: "Certificate of Publication",
    description: "Understanding AI, Autonomy, and the Limits of Human Control · ISBN 978-99993-5-529-2",
    file: "/certificates/eliva-press-publication.pdf",
  },
];

export const publications = [
  {
    id: "sandbox-security",
    type: "Independent research · SSRN",
    title: "When the Model Breaks the Sandbox: A Case Study of the July 2026 OpenAI–Hugging Face Autonomous Cyber Incident",
    meta: "Posted 6 August 2026 · 9 pages",
    description: "A qualitative case study examining sandbox escapes, specification gaming and containment gaps in autonomous AI systems, with discussion of AI safety and governance.",
    tags: ["AI Security", "Autonomous Agents", "AI Safety", "AI Governance"],
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7181179",
    linkLabel: "Read paper on SSRN",
  },
  {
    id: "when-machines-stop-obeying",
    type: "Book · Eliva Press",
    title: "When Machines Stop Obeying",
    subtitle: "Understanding AI, Autonomy, and the Limits of Human Control",
    meta: "ISBN 978-99993-5-529-2",
    description: "A book exploring artificial intelligence, autonomy and the limits of human control.",
    tags: ["Artificial Intelligence", "Autonomy", "Human Control"],
    href: "/certificates/eliva-press-publication.pdf",
    linkLabel: "View publication certificate (PDF)",
  },
];

export const about = {
  bio: [
    "Hi, my name is Syed Kamil, and I'm a Computer Science student at UMT, Lahore. I build production-ready software on Earth — and explore astronomical data beyond it.",
    "My core focus is end-to-end AI/ML pipelines and full-stack web products. Beyond core software engineering, I have a deep interest in space and astronomy — following JWST, Artemis, and exoplanet research.",
  ],
  facts: [
    { label: "Based in", value: "Lahore, Pakistan" },
    { label: "Studying", value: "B.S. Computer Science, UMT" },
    { label: "Focus", value: "AI/ML + Full-Stack" },
    { label: "Also into", value: "Astronomy, radio signals" },
  ],
};

export const experience = [
  {
    org: "Product Management Accelerator (PMA)",
    role: "AI/ML Engineer Intern — Lead Engineer, Closet AI",
    location: "Remote, USA",
    period: "Aug 2026 – Present",
    current: true,
    badge: "P",
    bullets: [
      "Finalized a buildable 5-week roadmap for an AI outfit-styling product by leading System Design Architecture conversations and presenting stack and persistence decisions at weekly mentor reviews.",
      "Prevented roadmap overcommitment by prioritizing features against the team's build timeline, and guided other interns through technical blockers without coding their solutions for them.",
      "Streamlined the team's release process by establishing a staging-to-production workflow using Git and GitHub.",
    ],
    tech: ["System Design", "Git", "GitHub", "Team Leadership"],
  },
  {
    org: "CodeAlpha",
    role: "Machine Learning Intern",
    location: "Delhi, India",
    period: "June – July 2026",
    current: false,
    badge: "C",
    bullets: [
      "Delivered a loan-risk classifier reaching 78% accuracy by benchmarking Logistic Regression, Random Forest, and Gradient Boosting with 5-fold cross-validation on the UCI German Credit dataset.",
      "Achieved up to 98% accuracy across 3 disease-prediction datasets by engineering and evaluating 4 classifiers per condition, applying systematic feature-selection and algorithmic complexity trade-offs.",
      "Shipped all models as interactive, deployable demos — not static notebooks — by building lightweight serving layers around each trained pipeline.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
  },
  {
    org: "Systems Limited",
    role: "AI Intern",
    location: "Lahore, Pakistan",
    period: "Feb 2025 – Dec 2025",
    current: false,
    badge: "S",
    bullets: [
      "Eliminated repetitive manual workflows by writing Python automation scripts adopted into the team's daily SDLC process, cutting recurring manual effort.",
      "Improved reliability of LLM-powered enterprise automation by engineering prompt structures and response-parsing/validation logic that reduced malformed outputs before pipeline handoff.",
      "Enabled daily trend visibility for the VSI Cloud Services team by cleaning and deduplicating production datasets and building recurring Pandas/Matplotlib reporting.",
    ],
    tech: ["Python", "LLM Integration", "Pandas", "Matplotlib"],
  },
];

export const projects = [
  {
    name: "Space Signal Receiver",
    tag: "Personal Project",
    tech: ["Python", "NumPy", "Matplotlib", "Flask", "RTL-SDR", "RAG"],
    blurb:
      "A signal-detection pipeline modeled on real SETI/radio-astronomy software, with a de-doppler drift search — the technique turboSETI uses on Breakthrough Listen data — and a Flask UI for the waterfall plot, driven by a physical RTL2832U/FC0013 SDR receiver (22–1100 MHz). Includes a RAG-based research assistant that indexes SETI/radio-astronomy papers and the project's own logs for natural-language querying, with spectrogram images auto-captioned via Claude vision at ingest time.",
    live: "https://friday-jpx4fu2im-kamilcodes14s-projects.vercel.app/",
    github: "https://github.com/kamilcodes14",
  },
  {
    name: "Disease Prediction from Medical Data",
    tag: "CodeAlpha ML Internship",
    tech: ["Python", "Scikit-learn", "XGBoost"],
    blurb:
      "ML system predicting Diabetes, Heart Disease, and Breast Cancer risk across 4 classifiers per condition. Best model per dataset reaches 98% test accuracy on Breast Cancer, 82% on Heart Disease, and 75% on Diabetes. Includes an OCR image-upload feature so users can submit a photo of a lab report instead of manual data entry.",
    live: "https://disease-prediction-app-7w65-okm9gpedq-kamilcodes14s-projects.vercel.app/",
    github: "https://github.com/kamilcodes14/CodeAlpha_DiseasePrediction",
  },
  {
    name: "F.R.I.D.A.Y. — AI Voice Assistant",
    tag: "Personal Project",
    tech: ["Python", "Tkinter", "Web Speech API", "Claude API"],
    blurb:
      "A personal AI voice assistant inspired by Iron Man's AI assistant — a Python/Tkinter desktop HUD and a browser version with an animated canvas HUD, powered by the Claude API. Low-latency wake-word interaction (instant double-clap on desktop, one-click in-browser), plus a mock interview coach refined through repeated self-testing.",
    live: "https://friday-jpx4fu2im-kamilcodes14s-projects.vercel.app/",
    github: "https://github.com/kamilcodes14/friday",
  },
  {
    name: "WeatherApp — PM Accelerator Assessment",
    tag: "Technical Assessment",
    tech: ["React", "FastAPI", "Supabase"],
    blurb:
      "Built for a PM Accelerator technical assessment: a full-stack weather app with real-time conditions and 5-day forecasts via the OpenWeatherMap API. GPS-based location detection, full CRUD backed by Supabase (Postgres), and data export in JSON, CSV, XML, and Markdown, with a responsive UI across desktop, tablet, and mobile.",
    live: "https://weather-app-pm-accelerator-4a9a.vercel.app/",
    github: "https://github.com/kamilcodes14/weather-app-pm-accelerator",
  },
  {
    name: "Smart Parking Allocation & Zone Management",
    tag: "Systems Project",
    tech: ["C++"],
    blurb:
      "Console-based allocation system managing parking slots across zones, with cross-zone fallback when a preferred zone is full. Request state machine (Pending → Allocated → Cancelled) with a rollback manager, modeled with an object-oriented architecture (Vehicle, Zone, ParkingArea, AllocationEngine).",
    live: "https://smart-parking-system-indol-rho.vercel.app/",
    github: "https://github.com/kamilcodes14/smart-parking-system",
  },
  {
    name: "Credit Scoring Model",
    tag: "CodeAlpha ML Internship",
    tech: ["Python", "Scikit-learn", "Pandas"],
    blurb:
      "Credit scoring model on the UCI German Credit dataset (1,000 applicants). Benchmarked Logistic Regression, Random Forest, and Gradient Boosting — improved accuracy from a 65.5% baseline to 78%, F1-score to 0.85. Ships with an interactive browser-based demo.",
    live: null,
    github: "https://github.com/kamilcodes14/CodeAlpha_CreditScoringModel",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "AI / LLM",
    items: [
      "LLM API Integration (OpenAI, Gemini, Anthropic)",
      "Prompt Engineering",
      "Generative AI Pipelines",
    ],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "ML / DL",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "XGBoost", "PyTorch"],
  },
  {
    category: "Tools & Databases",
    items: ["Git", "MySQL", "SQL Server", "Figma", "VS Code"],
  },
];

export const research = {
  title: "When the Model Breaks the Sandbox: A Case Study of the July 2026 OpenAI–Hugging Face Autonomous Cyber Incident",
  venue: "SSRN",
  text: "Independent research analyzing a real-world AI agent security failure, examining sandbox-escape vectors and containment gaps in autonomous LLM systems.",
};

// Paste your Formspree form endpoint here — find it under Forms (not Account)
// on formspree.io. It looks like: https://formspree.io/f/xxxxxxxx
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export const nav = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#education", label: "Education" },
  { path: "#experience", label: "Experience" },
  { path: "#research", label: "Research" },
  { path: "#certifications", label: "Certifications" },
  { path: "#projects", label: "Projects" },
  { path: "#skills", label: "Skills" },
  { path: "#contact", label: "Contact" },
];
