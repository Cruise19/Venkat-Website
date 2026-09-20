# Col V. Venkatraman — Portfolio

Personal portfolio website for Col V. Venkatraman (Retd) — Retired Army Engineer, Corporate Assessor, Certified ICF Coach, and Academician.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React SSR framework)
- TypeScript
- React
- Tailwind CSS
- Radix UI / shadcn-style components

## Getting Started

This project uses [Bun](https://bun.sh) as its package manager and runtime.

```sh
# 1. Clone the repository
git clone https://github.com/Cruise19/Venkat-Website.git
cd Venkat-Website

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
```

The app will be available at the URL shown in your terminal (typically `http://localhost:8080`).

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the local development server |
| `bun run build` | Build the app for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format the codebase with Prettier |

## Project Structure

```
src/
  data/portfolio.ts   # All site content (hero, about, experience, skills, etc.)
  routes/              # TanStack Router pages
  components/          # UI components
  lib/                  # Shared utilities
public/                # Static assets (images, logos, favicon)
```

Most content edits (bio, experience, skills, certifications) can be made directly in [`src/data/portfolio.ts`](src/data/portfolio.ts) without touching component code.

## Deployment

The project builds to a standard Node/edge-compatible output via `bun run build` and can be deployed to any platform that supports TanStack Start (e.g. Vercel, Netlify, Cloudflare).
