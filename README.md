# mydevsandbox.com

Modern static site built with React, TypeScript, and Vite.

## Stack

- React 18
- TypeScript 5
- Vite 6
- GitHub Pages (deployed by GitHub Actions)

## Local development

Requirements:

- Node.js 20+

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

Deployments run automatically via [.github/workflows/deploy.yml](.github/workflows/deploy.yml) on pushes to `main`.
The workflow builds the Vite app and publishes the `dist/` artifact to GitHub Pages.

Custom domain is configured through `public/CNAME`.
