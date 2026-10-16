# portfoliorakib — Rakib Hasan Shuvo Portfolio

Modern portfolio built with Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion.

Based on content from:
- Old portfolio: https://rakibhasanshuvo712-hub.github.io/portfolio/
- GitHub: https://github.com/rakibhasanshuvo712-hub

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Replace before deploy
1. Replace `public/Rakib-Hasan-Shuvo-CV.pdf` with your real CV (same filename).
2. Optional: add your photo to `public/profile.jpg` and update `src/data/portfolio.ts` avatar field.
3. Edit content in `src/data/portfolio.ts` (projects, skills, links).

## Deploy to Vercel
1. Push `C:\project\portfoliorakib` to a new GitHub repo (e.g. `portfoliorakib`).
2. Import in Vercel → Deploy. No env vars needed.
3. Contact form uses `mailto:` — no backend needed. For a real API form, plug in Formspree/Resend later.

## Structure
- `src/app/` — layout, page, globals
- `src/components/` — Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer
- `src/data/portfolio.ts` — all editable content
