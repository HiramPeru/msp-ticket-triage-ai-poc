# Production Demo Deployment

## Purpose

This repository includes a static React and Vite demo for showcasing the MSP ticket triage proof of concept in a recruiter-friendly format. The web app reuses the same deterministic triage logic as the CLI and is designed for static hosting on Vercel.

## Vercel Deployment Settings

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run web:build`
- Output directory: `web/dist`
- Environment variables: none required

## Deploy Steps

1. Import the repository into Vercel.
2. Confirm the root directory is the repository root.
3. Set the build command to `npm run web:build`.
4. Set the output directory to `web/dist`.
5. Leave environment variables empty.
6. Deploy.

## Local Verification Before Deploy

Run the same checks used for this repository:

```bash
npm install
npm run build
npm start
npm run web:build
git diff --check
```

## Demo Limitations

- The demo is deterministic and rule-based in v1.
- It uses local sample tickets only.
- It has no backend, database, authentication, or live ticketing integration.
- It makes no external AI calls and requires no secrets.
- It is intended as a static product demonstration, not a production MSP platform.
