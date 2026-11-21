# Parv Patel — Portfolio

Next.js 15 + Tailwind CSS v4. Dark/light theme toggle, fully static.

## Edit content
All text, links, projects and skills live in **`lib/data.ts`**. To update your résumé, replace `public/Parv_Patel_Resume.pdf`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel
1. Create a new empty repo on GitHub, e.g. `portfolio`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ParvPatel26/portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com → sign in with GitHub → **Add New → Project** → import `portfolio` → **Deploy**.
   (Vercel auto-detects Next.js — no settings to change.)
4. Your site is live at `https://<project-name>.vercel.app`. Rename it under **Settings → Domains**, e.g. `parvpatel.vercel.app`.

Every `git push` to `main` redeploys automatically.
