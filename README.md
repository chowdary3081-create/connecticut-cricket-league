# Connecticut Cricket League (CCL) Website

A multi-page, cricket-friendly website built with Next.js (App Router) + TypeScript + Tailwind.

## What works right now
- Home, About, Match Center, Leather Ball, CCL-TCL, Teams, Points Table, Gallery, Contact
- Admin login (hidden): `/admin/login`
- If CricClubs URLs are blank, Leather Ball/TCL/Points Table show "Coming soon".

## Local setup
1. Install deps
   ```bash
   npm install
   ```
2. Create `.env.local` using `.env.example`
3. Run
   ```bash
   npm run dev
   ```

## Deploy to Hostinger
1. Upload/push the project to a Git repo (recommended) or upload files.
2. Create a Node.js web app in hPanel.
3. Set build/start
   - Build: `npm run build`
   - Start: `npm run start`
4. Add environment variables in Hostinger
   - `NEXTAUTH_URL` = `https://yourdomain.com`
   - `NEXTAUTH_SECRET` = long random string
   - `ADMIN_USERNAME` = `CCLadmin`
   - `ADMIN_PASSWORD` = (your password)
   - Optional CricClubs URLs

## Security notes
- Frontend code is always visible in the browser. Secrets are kept server-side using env vars.
- Admin routes are not linked and are marked `noindex`.
