# Brilworks Portfolios

A Next.js showcase site for Brilworks' products — web apps, browser extensions, and mobile applications. Each project is displayed as a card with title, subtitle, description, tags, and a direct link.

## Tech Stack

- **Framework:** Next.js 16 (App Router, fully static)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Font:** Geist (via `next/font/google`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & smooth scroll
│   ├── layout.tsx        # Root layout — Navbar + Footer
│   └── page.tsx          # Home page — Hero, stats, category sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile hamburger
│   ├── Hero.tsx          # Headline + CTA
│   ├── CategorySection.tsx  # Section wrapper per category
│   └── ProjectCard.tsx   # Individual project card
└── data/
    └── projects.ts       # All project data — edit here to add/update entries
```

## Adding or Updating a Project

All project data lives in [`src/data/projects.ts`](src/data/projects.ts). Add a new object to the `projects` array:

```ts
{
  id: "unique-id",
  title: "Project Name",
  subtitle: "One-line tagline",
  description: "Two-sentence description shown on the card.",
  category: "web" | "extension" | "mobile",
  tags: ["Tag One", "Tag Two"],
  url: "https://your-project-url.com",
  imageUrl: "/images/your-image.png", // optional — place file in /public/images/
}
```

## Projects

### Browser Extensions (8)

| Project | Description |
|---|---|
| [WhatStack](https://whatstack.brilworks.com) | Website tech stack detector — identifies 1,000+ technologies |
| [EyeRest](https://eyerest.brilworks.com) | 20-20-20 eye care timer for Chrome |
| [ChromaPro](https://chromapro.brilworks.com) | Professional color picker & palette generator |
| [SnapMark](https://snapmark.brilworks.com) | Screenshot, annotate & share instantly |
| [Dark Mode for Chrome](https://dark.brilworks.com) | Night & eye care reading modes |
| [Nudge](https://nudge.brilworks.com) | Personal CRM inside the browser |
| [BrowseX](https://chromewebstore.google.com/detail/browsex-ai-web-automation/giflafbkeahbjpoenblgifmneopecmhn) | AI-powered web automation |
| [Best Custom Cursors](https://chromewebstore.google.com/detail/best-custom-cursors-anime/mnbdkjcfgfelpmkbjhdgjmlcjjmpheef) | Anime, gaming & cute pointer styles |

### Web Apps (16)

| Project | Description |
|---|---|
| [Invoicify AI](https://invoicify.brilworks.com) | Neural-powered invoice processing |
| [StatementFlow](https://statementflow.brilworks.com) | AI credit card statement analyzer |
| [AI Audit & Compliance Assistant](https://audit.brilworks.com) | Automated financial auditing & GST compliance |
| [CourseSphere](https://coursesphere.brilworks.com) | Full-stack online course platform |
| [OrderFlow](https://order.brilworks.com) | Premium order management system |
| [Admissions OS](https://admission.brilworks.com) | AI-orchestrated MBA application platform |
| [3D Room Designer](https://roomplanner.brilworks.com) | AI-powered browser-based interior design tool |
| [Brilworks Voice Agents](https://voice.brilworks.com) | Real-time AI voice agents for 16 industries |
| [Aster Lite](https://aster-lite-os.vercel.app) | Manufacturing & operations OS for B2B lighting |
| [GarageMap](https://garagemap.brilworks.com) | Comprehensive garage & workshop management |
| [VectorTrace](https://vectortrace.brilworks.com) | Raster to vector conversion tool |
| [HR-Tech](https://hrtech.brilworks.com) | AI-powered recruitment platform |
| [ConstructOps AI](https://realestate.brilworks.com) | Real estate & construction ops platform |
| [OrderNest](https://restaurant.brilworks.com) | Restaurant management platform |
| [LifeAI](https://lifeai.brilworks.com) | AI life assistant |

### Mobile Apps (4)

| Project | Description |
|---|---|
| [CardDex](https://card.brilworks.com) | Scan QR codes to collect animated digital cards |
| [Ping](https://brilworks.com) | Mexico → USA cross-border payment app |
| [Circle Up](https://circle.brilworks.com) | Community & social platform |
| [ScanEat](https://scaneat.brilworks.com) | Food barcode scanner & health analyzer |

## Build

```bash
npm run build
```

Outputs a fully static site — no server required.
