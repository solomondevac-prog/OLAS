# OLAS - Vite + React Conversion

This repository is a scaffold for the Our Lady of the Angels Seminary-College static site migrated to a Vite + React single-page app.

What I added:
- Vite + React scaffold (index.html, package.json, vite.config.js)
- React entry files: `src/main.jsx`, `src/App.jsx`
- Page components (Homepage, About, Research, Graduate, Outreach, Volunteer)
- Basic `Navbar` and `Footer` components
- Consolidated `src/styles/global.css` with responsive improvements

How to run (Windows PowerShell):

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Notes & next steps:
- Images referenced in the original site (e.g. `1.png`, `2.jpg`, `picture`) should be copied into the project root or `public` folder. You can place them at the project root (same dir as `index.html`) or create a `public/` folder.
- I preserved and consolidated core CSS into `src/styles/global.css`. You can further split into CSS modules or adopt Tailwind/Bootstrap.
- To enable React fast refresh I included `@vitejs/plugin-react` in devDependencies — run `npm install` to fetch it.
- If you want me to also wire a deployment (Netlify/Vercel) or add animations, accessibility fixes, or component tests, tell me which to prioritize.
