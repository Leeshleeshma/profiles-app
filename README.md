This is a simple React application initialized using Vite inside a Node.js Dev Container. It uses React-Bootstrap and Bootstrap for styling UI components. The initial setup displays a “Hello React” message inside a Bootstrap-styled alert.

![profile](<Screenshot 2025-11-05 at 11.06.38 AM.png>)

## Commit Link - 
https://github.com/Leeshleeshma/profiles-app/commit/4d9e484598093637e34df5807813249857e5d1e1

## Page URL
https://leeshleeshma.github.io/profiles-app/

# Profiles App (Lab 1)

## Dev Container

> Talk about the image you are using here.!
For eg, if i were to use the Node.js dev container, I would write:
- Node.js dev container (image: `mcr.microsoft.com/devcontainers/javascript-node:20`)
- `corepack enable` to use npm/yarn/pnpm reliably

## Getting Started
\ ```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
\ ```

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

**Live URL:** https://leeshleeshma.github.io/profiles-app/

## Notes
- Uses React + React-Bootstrap.
- We use components, props, and `.map()`.
