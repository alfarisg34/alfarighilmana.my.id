---
name: Alfari Sidnan Ghilmana Portfolio & Engineering Showcase
description: High-Performance Enterprise Automation, Interactive Visual Computing & Systems Architecture
colors:
  primary: "#0284c7"
  secondary: "#4f46e5"
  tertiary: "#059669"
  amber: "#d97706"
  rose: "#e11d48"
  neutral-bg: "#f8fafc"
  neutral-surface: "#ffffff"
  neutral-card: "#ffffff"
  neutral-card-subtle: "#f1f5f9"
  neutral-code: "#0b1120"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-muted: "#64748b"
  text-highlight: "#020617"
  border-subtle: "#e2e8f0"
  border-hover: "#94a3b8"
typography:
  display:
    fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, 'Fira Code', Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.45rem"
  button-primary-hover:
    backgroundColor: "#1e293b"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.45rem"
  badge-cyan:
    backgroundColor: "rgba(2, 132, 199, 0.09)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
  card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "2.25rem"
---

# Design System: Alfari Sidnan Ghilmana Portfolio & Engineering Showcase

## Overview

**Creative North Star: "The Precision Terminal & Editorial Ledger"**

The visual language balances rigorous mathematical precision with modern editorial clarity. Built as an authoritative platform for senior engineering leaders and technical recruiters, the system rejects noisy decorative gimmicks in favor of crystal-clear typographic hierarchy, ambient frosted surfaces, and high-density technical telemetry.

Every surface is engineered with deliberate tactile feedback: floating glassmorphic nav bars, crisp code preview terminals, and fluid pill-shaped controls that respond gracefully to user interaction. Ambient radial mesh glows gently illuminate deep slate and dark backgrounds, providing atmospheric warmth without compromising readability or speed.

**Key Characteristics:**
- High-contrast geometric typography with specialized monospace accents for computational metrics.
- Layered frosted glass panels (`backdrop-filter: blur(16px)`) with hairline border definitions.
- Dynamic dual-mode fidelity (Clean Editorial Light default with an immersive Obsidian Dark mode).
- Concrete data visualization blocks (ASCII architecture schemas, mini metrics grids, live status indicators).

## Colors

The palette pairs high-contrast slate neutrals with vibrant, purposeful spectral accents that delineate system categories, computational accuracy, and active workflows.

### Primary
- **High-Precision Sky Cyan** (#0284c7 / dark #38bdf8): The primary interactive anchor and brand signature, used for active navigation states, primary highlights, metric values, and interactive focus rings.

### Secondary
- **Deep Spectrum Indigo** (#4f46e5 / dark #818cf8): Supporting role for organizational titles, secondary gradient stops, and structural accents.

### Tertiary
- **Operational Emerald** (#059669 / dark #10b981): Denotes live system health, computational uptime, verified accuracy badges, and availability indicators.

### Additional Accents
- **Alert Amber** (#d97706 / dark #f59e0b): Highlight tags for fullstack financial and budget calculation modules.
- **Signal Rose** (#e11d48 / dark #f43f5e): Reserved for critical architectural warnings, security testing alerts, and system stress markers.

### Neutral
- **Slate Canvas** (#f8fafc / dark #06090f): The foundational canvas background.
- **Pure Surface** (#ffffff / dark #0b111e): Primary background for elevated cards, modals, and container surfaces.
- **Subtle Surface Tint** (#f1f5f9 / dark rgba(255, 255, 255, 0.04)): Background for nested stat strips, filter pills, and inactive control tracks.
- **Terminal Obsidian Navy** (#0b1120 / dark #030712): High-contrast dark container for code previews, terminal windows, and ASCII architecture schemas.
- **Text Slate Black** (#0f172a / dark #f8fafc): High-contrast primary reading text.
- **Text Steel Slate** (#475569 / dark #94a3b8): Secondary explanatory copy and descriptive subtitles.
- **Hairline Slate** (#e2e8f0 / dark rgba(255, 255, 255, 0.08)): Subtle borders defining container edges and structural dividers.

### Named Rules
**The Telemetry Rarity Rule.** Vivid spectral accents (Cyan, Indigo, Emerald) must occupy ≤15% of any viewport. Their visual impact relies entirely on being framed against expansive, disciplined slate neutrals.

**The Semantic Accent Rule.** Emerald strictly indicates verified computational success or live status; Cyan indicates user action and navigation; Indigo denotes architecture and organizational hierarchy.

## Typography

**Display Font:** Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
**Body Font:** Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
**Label/Mono Font:** JetBrains Mono, 'Fira Code', Consolas, monospace

**Character:** Geometric confidence meets editorial readability. Outfit delivers authoritative, modern headline punch with tight negative letter-spacing, Plus Jakarta Sans provides effortless long-form readability, and JetBrains Mono anchors technical data and code architecture in authentic engineering craft.

### Hierarchy
- **Display** (Outfit, weight: 900, size: `clamp(2.25rem, 5vw, 3.75rem)`, line-height: 1.12, letter-spacing: -0.03em): Hero nameplate and primary page declarations.
- **Headline** (Outfit, weight: 700, size: `2.6rem`, line-height: 1.25, letter-spacing: -0.025em): Section title headers.
- **Title** (Outfit, weight: 800, size: `1.85rem`, line-height: 1.2, letter-spacing: -0.02em): Featured project cards and major modal titles.
- **Body** (Plus Jakarta Sans, weight: 400, size: `1rem`, line-height: 1.65): Standard prose, project case descriptions, and timeline summaries. Line lengths kept between 55ch and 75ch.
- **Label / Tag** (JetBrains Mono, weight: 600, size: `0.82rem`, letter-spacing: 0.06em, uppercase): Section category tags, technical badges, system metrics, and architectural labels.

### Named Rules
**The Code Authenticity Rule.** All architectural schemas, technical stack lists, data volume metrics, and file paths must be set strictly in `JetBrains Mono` to distinguish raw engineering facts from editorial prose.

## Layout

The spatial model uses a centralized, fluid max-width container (`1240px`) padded with responsive gutters (`1.5rem` on desktop, `0.85rem` on mobile). Content is structured into clearly delineated vertical sections (`padding: 5.5rem 0` on desktop, `4rem 0` on mobile) separated by generous breathing room.

- **Hero Grid**: Centered single-column focal header flanked by a 4-column horizontal telemetry strip (`repeat(4, 1fr)`).
- **Featured Showcase**: Asymmetric 2-column split card (`grid-template-columns: 1.2fr 1fr`), pairing rich engineering case narratives with terminal-styled code / architecture diagrams. Stacks cleanly to a single column on viewports `<= 1024px`.
- **Skills Matrix**: 2-column balanced grid (`repeat(2, 1fr)`) converting to single-column below `768px`.
- **Navigation Bar**: Floating pill header fixed at `top: 1.25rem` with dynamic backdrop blur (`16px`) and scroll-responsive shadow intensification.

## Elevation & Depth

The system uses a layered glass and ambient depth philosophy. Rather than heavy artificial drop shadows, depth is achieved through translucent frosted glass layers, crisp 1px hairline borders, and atmospheric radial glow mesh backdrops.

### Shadow Vocabulary
- **Subtle Surface** (`box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)`): Resting state for small interactive chips and secondary buttons.
- **Elevated Card** (`box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`): Base resting state for project cards, about boxes, and floating navigation.
- **Hover Lift** (`box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 10px 15px -5px rgba(15, 23, 42, 0.06)`): Active hover response across cards, chips, and interactive modules.
- **Modal Depth** (`box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25)`): Deep scrim elevation for full case study modals.
- **Ambient Accent Halo** (`box-shadow: 0 0 20px rgba(2, 132, 199, 0.15)`): Diffuse atmospheric glow under focused pills and active badges.

### Named Rules
**The Glass-Before-Shadow Rule.** Depth is established first by backdrop blur (`backdrop-filter: blur(16px)`) and 1px border contrast (`var(--border-subtle)`). Shadows serve only to elevate interacting or hovered elements off the plane.

## Shapes

The form language uses smooth, tactile radii configured in an intentional geometric hierarchy:

- **Full Radius (Pill, `9999px`)**: Interactive buttons (`.btn`), status pills (`.status-pill`), category filter chips (`.filter-btn`), and floating navigation bars (`.nav-inner`).
- **Large Radius (`20px` / `--radius-lg`)**: Primary containers, featured project cards (`.project-card`), modal containers (`.modal-container`), and contact modules.
- **Medium Radius (`14px` / `--radius-md`)**: Nested sub-cards, mini stats strips (`.project-stats-strip`), and code preview windows (`.project-visual-preview`).
- **Small Radius (`8px` / `--radius-sm`)**: Inner tech tags, timeline markers, and sub-action triggers.

## Components

### Buttons
- **Shape:** Full pill radius (`9999px`), inline-flex alignment with centered SVG icons (`gap: 0.55rem`).
- **Primary:** Dark slate background (`#0f172a` in light mode, Cyan-Indigo gradient in dark mode), white text, padding `0.7rem 1.45rem`, subtle 1px border.
- **Hover / Focus:** Lifts `-2px` with expanded shadow (`0 6px 20px rgba(15, 23, 42, 0.25)`).
- **Secondary:** Clean white/surface background with subtle 1px border (`#e2e8f0`), text `#0f172a`, transitioning to `#0284c7` on hover.

### Chips & Filter Pills
- **Style:** Pill shape (`9999px`), background `var(--bg-surface)`, 1px border `var(--border-subtle)`, font size `0.9rem`, font weight 600.
- **Active State:** Deep slate background `#0f172a` with pure white text and `-1px` subtle lift. In dark mode, switches to `rgba(56, 189, 248, 0.15)` with Cyan border.

### Project Cards
- **Corner Style:** Large curve (`20px`), overflow hidden.
- **Structure:** Split 2-column layout (body text left, terminal code preview right).
- **Border:** 1px solid `var(--border-subtle)` transitioning to `var(--border-hover)` on hover.
- **Internal Padding:** `2.5rem` desktop, `1.5rem` mobile.
- **Hover State:** Smooth `transform: translateY(-3px)` with `var(--shadow-hover)`.

### Code & Architecture Terminals
- **Corner Style:** Medium radius (`14px`), dark background (`#0b1120`).
- **Window Header:** Three colored window control dots (Red `#ef4444`, Yellow `#f59e0b`, Green `#10b981`), bottom divider border.
- **Content:** Monospaced ASCII architecture schemas with horizontal scrolling and `#38bdf8` / `#cbd5e1` syntax coloring.

### Navigation Bar
- **Style:** Fixed floating pill (`border-radius: 9999px`), frosted glass (`backdrop-filter: blur(16px)`).
- **Items:** Inline link list with animated cyan indicator underlines (`transition: width 0.3s ease`).
- **Actions:** Quick theme toggle button (Sun/Moon SVG) and primary CTA button.

## Do's and Don'ts

### Do:
- **Do** preserve the strict three-tier typography hierarchy: `Outfit` for headings, `Plus Jakarta Sans` for body, and `JetBrains Mono` for code, labels, and metrics.
- **Do** wrap all interactive call-to-action buttons in full pill radius (`border-radius: 9999px`).
- **Do** maintain high contrast ratios (WCAG AA compliant, minimum 4.5:1 for normal text and 3:1 for large text/icons) across both Light and Dark modes.
- **Do** frame code previews and architectural diagrams in dark obsidian terminal boxes (`#0b1120`), even in Light mode.
- **Do** provide smooth micro-transitions (`all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`) and subtle `-2px` to `-3px` elevation lifts on hover.

### Don't:
- **Don't** introduce random border radii (e.g. sharp `2px` corners or arbitrary `35px` curves); stick strictly to `8px`, `14px`, `20px`, and `9999px`.
- **Don't** use heavy opaque background colors behind navigation or modals; always preserve frosted translucent backdrop blur.
- **Don't** apply saturated accent gradients (Cyan/Indigo) to whole card backgrounds; reserve gradients for text highlights, active badges, and subtle ambient glows.
- **Don't** mix unvetted third-party icon libraries or heavy runtime dependencies; use lightweight inline SVGs.
