# WarmPaws – Pet Care in Winter

A cozy winter companion platform designed to help pet owners keep their furry friends warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

## Live URL
(Add your deployed link here after hosting on Netlify/Surge/Firebase)

## Key Features
- Minimal, modern, responsive UI (Tailwind + DaisyUI) with subtle animations (AOS, Swiper).
- SPA routing with React Router; persistent Navbar/Footer.
- JSON-driven services (6+ items) with images, rating, price, and details.
- Protected service details page; redirects unauthenticated users to Login, then back.
- Firebase Authentication (Email/Password + Google sign-in).
- My Profile page with **Update Profile** (name, photo) using `updateProfile()`.
- Forgot Password flow that pre-fills email and redirects to Gmail after sending reset email.
- Toast notifications for success & error states.
- Netlify/Surge-friendly SPA redirects (`_redirects`).

## Tech Stack
- React + Vite
- React Router
- Firebase Auth
- Tailwind CSS + DaisyUI
- Swiper (hero slider)
- AOS (scroll animations)
- react-hot-toast

## Environment Variables
Create `.env.local` at project root (based on `.env.example`) and add your Firebase config:
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```
**Security:** Vite exposes env vars prefixed with `VITE_`. Do not hardcode secrets in source files.

## Getting Started (Local)
```bash
npm install
npm run dev
```

Visit the local URL printed by Vite (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Deploy (Netlify Example)
1. Push this repo to GitHub with **10+ meaningful commits** (add features in small steps).
2. On Netlify, create a new site from GitHub.
3. Build command: `npm run build` – Publish directory: `dist`.
4. Add **Environment Variables** in Netlify → Site Settings → Build & deploy → Environment.
5. Add authorized domain in Firebase Authentication → Settings.
6. SPA redirects: this repo contains `_redirects` (/* /index.html 200).

## Deploy (Surge Example)
```bash
npm run build
npm install -g surge
surge ./dist your-subdomain.surge.sh
```
Add domain to Firebase authorized domains if you use Surge.

## JSON Images
Replace images in `public/services.json` with your own (postimages.org / imgbb.com).

## NPM Packages Used
- `react-router-dom`
- `firebase`
- `react-hot-toast`
- `swiper`
- `aos`
- `tailwindcss` + `daisyui` (dev)
