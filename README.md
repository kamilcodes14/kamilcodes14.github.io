# Kamil Zaidi — Portfolio

A multi-page personal portfolio (Home, About, Experience, Projects, Skills, Contact)
built with React + Vite + React Router, styled as a mission-control / HUD-inspired
dashboard.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

All real content — name, bio, experience, projects, skills — lives in one place:

```
src/data/content.js
```

Edit that file and every page updates automatically. You won't need to touch the
page components for routine content changes (new project, new job, updated bio).

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. On vercel.com → New Project → import the repo.
3. Framework preset: Vite (auto-detected). No extra config needed —
   `vercel.json` in this repo already handles client-side routing.
4. Deploy.

## Structure

```
src/
  components/   Layout (nav/footer) + HudBar (the live status bar)
  pages/        One folder-free file pair (.jsx + .css) per page
  data/         content.js — single source of truth for all page content
```
