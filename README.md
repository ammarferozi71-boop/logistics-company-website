# Logistics Company Website

This is a Next.js 13+ (app router) site scaffolded for a logistics/clearing & forwarding company.

Quick local run

```bash
# install dependencies (pnpm recommended)
pnpm install
pnpm dev

# build
pnpm build
pnpm start
```

Deploy to Vercel (recommended)

- Option A — GitHub integration: push this repository to GitHub, then import the repo in Vercel (vercel.com). Vercel will auto-detect Next.js and provide a public URL.
- Option B — CLI deploy:

```bash
# install Vercel CLI if you don't have it
npm i -g vercel

# run from repo root
vercel --prod
```

CI/CD via GitHub Actions

This repo includes a workflow (.github/workflows/vercel-deploy.yml) that can deploy on push. Add the following GitHub secrets in your repository settings:

- `VERCEL_TOKEN` — your Vercel personal token
- `VERCEL_ORG_ID` — your Vercel organization ID
- `VERCEL_PROJECT_ID` — your Vercel project ID

Once set, pushing to `main` will trigger an automatic deployment and produce a public URL you can share with your client.

Notes
- `next.config.mjs` currently sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` to simplify builds; consider removing `ignoreBuildErrors` before production.
