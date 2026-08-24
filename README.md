# Alfari Sidnan Ghilmana - Personal Portfolio & Engineering Showcase 🚀

Official personal portfolio website for **Alfari Sidnan Ghilmana** (`alfarighilmana.my.id`), designed for deployment on **Vercel** with custom DNS managed via **Hostinger**.

---

## 🌟 Overview

This portfolio showcases software systems, computational models, and fullstack cloud architectures built by Alfari Sidnan Ghilmana, an Informatics graduate from **Universitas Padjadjaran (UNPAD)** and Full Stack Software Engineer.

### Signature Featured Projects

1. **Kemnaker Excel Processor V3**
   - *Enterprise Budget Automation & 41-Column RAB Matrix Engine*
   - Automates 20-column side-by-side matrices (SEMULA vs. MENJADI vs. SELISIH), dynamic bottom-up hierarchical SUM recalculation, Laporan FA Detail (16 Segmen) reconciliation, multiplier parsing, and TTE signature blocks.
   - *Stack*: Node.js, Express.js, ExcelJS, Vanilla JS/CSS.

2. **Interactive Family Tree Map Explorer**
   - *RPG/Map-Style Canvas Genealogy Explorer with Dynamic LOD*
   - 60 FPS Canvas Pan & Zoom navigation, 3-tier dynamic Level of Detail (LOD), client-side canvas compression (>90% file size reduction), sepia vintage filter for deceased members, divorce lines, adoptive badges, and Supabase PostgreSQL syncing.
   - *Stack*: React 18, TypeScript 5, Vite 6, Tailwind CSS, Supabase PostgreSQL, Canvas 2D API.

3. **Smart Financial & Budget Intelligence Platform**
   - *Fullstack Wealth OS & Multi-Wallet Cashflow Management*
   - Real-time multi-account ledger (BCA, Mandiri, Cash, Wallets), Recharts interactive cash flow & burn rate analytics, in-line mathematical evaluator calculator (`AmountCalculatorInput`), Supabase SSR Auth + RLS, and Admin governance panel.
   - *Stack*: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Supabase, Recharts.

---

## 🛠️ Project Structure

```text
c:\Me\Code\alfarighilmana.my.id/
├── index.html                 # Semantic HTML5 single page application
├── css/
│   ├── style.css              # Master styling, design tokens, layout & ambient mesh
│   ├── components.css         # UI components (cards, modals, badges, filters, nav)
│   └── responsive.css         # Mobile & tablet fluid responsive breakpoints
├── js/
│   ├── data.js                # Deep project case studies, bio, skills, & milestones
│   ├── app.js                 # UI interactions, modal controls, filters, animations
│   └── icons.js               # Lightweight SVG icon definitions & helpers
├── assets/
│   └── favicon.svg            # Modern geometric AG branding favicon
├── vercel.json                # Vercel edge deployment configuration
├── DEPLOYMENT_GUIDE.md        # Comprehensive Hostinger DNS -> Vercel setup manual
└── README.md                  # Project documentation
```

---

## ⚡ Local Testing

You can run this project locally with any simple HTTP server:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js npx serve
npx serve .
```

Open your browser at `http://localhost:3000`.

---

## 🌐 Custom Domain Setup (`alfarighilmana.my.id`)

- **A Record**: `@` &rarr; `76.76.21.21` (TTL: `300`)
- **CNAME Record**: `www` &rarr; `cname.vercel-dns.com` (TTL: `300`)

See [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) for full instructions.
