# Infopini

A clean, editorial news site covering **Tech**, **Biotech**, and **Policy**.

Built with Next.js and Markdown — no database, no CMS. Just add articles and deploy.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Articles

Create a new `.md` file in `content/articles/`:

```markdown
---
title: "Your Headline Here"
excerpt: "A one- or two-sentence summary for listings and SEO."
category: tech          # tech | biotech | policy
author: "Your Name"
date: 2026-07-13
featured: false         # optional — shows on homepage hero
---

Your article body in Markdown. Supports **bold**, lists, blockquotes, and headings.
```

The filename becomes the URL slug: `my-article.md` → `/article/my-article`.

## Categories

| Slug       | Section  | URL        |
|------------|----------|------------|
| `tech`     | Tech     | `/tech`    |
| `biotech`  | Biotech  | `/biotech` |
| `policy`   | Policy   | `/policy`  |

## Project Structure

```
content/articles/     ← Markdown articles (your content)
src/
  app/                ← Pages (home, category, article)
  components/         ← Header, Footer, ArticleCard, etc.
  lib/articles.ts     ← Reads and parses Markdown files
  types/article.ts    ← Category definitions
```

## Deploy

Works on Vercel out of the box:

```bash
npx vercel
```

Articles are read at build time. After adding or editing content, redeploy (or restart the dev server locally).
