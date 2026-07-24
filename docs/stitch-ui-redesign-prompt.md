# ProLampX — Stitch UI Redesign Prompt

Copy the prompt below into [Google Stitch](https://stitch.withgoogle.com/) to redesign all public frontend flows.  
**Scope:** customer-facing pages only — no admin panel, no ecommerce.

---

## How to use

1. Paste the **Prompt** section into Stitch as the main brief.
2. Generate **Installer** first (core UX), then Home, then catalog/bundles, then blog/contact/legal/auth.
3. If Stitch asks for a product type, choose **SaaS / utility / tool**, not ecommerce.
4. This brief centers the **installer product** (not agency brochure). If the homepage should stay agency-led, revise Screen 1 only.

---

## Prompt

```
Design a complete multi-screen UI redesign for ProLampX (https://prolampx.com) — a Ninite-style multi-OS freeware software installer. Users pick free apps for their OS, download ONE custom setup file, and run it to install everything via package managers (winget / Homebrew / apt). No account required for the core product. No shopping cart, checkout, payments, or admin panel.

PRIMARY PRODUCT PROMISE
“Pick your apps, download one installer, and set up a fresh Windows, macOS, or Ubuntu machine in minutes.”
Tagline: “Install Software for Windows, macOS & Ubuntu”
Differentiator vs Ninite: multi-OS + automatic OS detection (show only apps available for that OS) + manual OS override.

BRAND
- Name: ProLampX (hero-level brand presence on every marketing screen)
- Logo: use text wordmark “ProLampX” + simple geometric mark if needed
- Colors: deep navy #1B365D / #0f2440, accent blue #4F8CFF, clean whites/soft blue-gray surfaces. Avoid purple/violet gradients, cream+terracotta, and generic AI “indigo glow” looks.
- Typography: modern expressive sans (not Inter/Roboto/Arial). Clear hierarchy; product UI should feel fast and technical but friendly.
- Tone: product-first installer tool (not an agency brochure). Marketing supports the installer; do not redesign this as a generic web-dev studio site.
- Support light mode primarily; optional dark variants for key screens.
- Desktop + mobile responsive for every screen.

GLOBAL CHROME (all public pages)
Header (sticky):
- Logo left
- Center pill/nav: Home | Installer | Bundles | Software | Blog
- Primary CTA right: “Get Installer” → /installer
- Mobile: hamburger sheet with same links + CTA
- NO Admin link. NO Login in primary nav (auth is secondary).

Footer:
- Brand blurb (installer pitch)
- Quick links: Home, Installer, Bundles, Software, Blog
- Company: Contact, Privacy Policy, Terms of Service, Cookie Policy, Cookie Settings
- Copyright © ProLampX

Also design: cookie consent banner (Accept / Reject) and a reusable empty/loading state for catalog lists.

————————————
SCREEN 1 — HOME `/`
One composition first viewport (not a dashboard). Brand-first.
Hero only: brand, one headline about multi-OS install, one short supporting sentence, one CTA group (“Get Installer” primary, “Browse Software” secondary), one full-bleed dominant visual of a fresh machine / installer workflow. No cards, no stats strip, no floating badges on hero media.

Below the fold (one job per section):
1) How it works — 3 steps: Detect OS → Pick apps → Download & run one installer
2) OS support — Windows / macOS / Ubuntu chips
3) Featured bundles teaser → link to /bundles
4) Software categories teaser → link to /software
5) Blog highlights (optional, light)
6) Final CTA band → Get Installer + Contact

Do NOT include agency “services / process / testimonials / client logos” as primary content. Keep the page about the installer product.

————————————
SCREEN 2 — INSTALLER `/installer` (CORE PRODUCT — most important)
Ninite-like checklist experience, OS-aware.

Layout:
- Page title: “Build your installer”
- Subtitle: pick apps for your OS, download one setup file
- OS Banner: detected OS (Windows | macOS | Ubuntu) + manual OS select dropdown to override
- Optional starter: horizontal/grid of Bundle cards (“Start from a bundle”) — each shows name, short description, mini app icons; click applies that bundle’s selections
- Main area: categories (e.g. Web Browsers, Developer Tools, Messaging, Media, Utilities, Security, Compression). Each category is a section with rows of software:
  - App icon, name, free/freeware badge, checkbox
  - Selecting toggles inclusion in the installer
- Sticky bottom action bar:
  - Selected count
  - Primary button “Download Installer” (disabled until ≥1 app selected)
  - After generate: download link for prolampx-setup.bat | .command | .sh depending on OS
- Collapsible “How to run” guide (OS-specific steps + troubleshooting + copyable run tip). Emphasize: one file installs all selected apps automatically from official package managers; internet required; not an offline bundle of installers.

Variant states to design:
- Empty selection
- Several apps selected
- After successful generate (download ready)
- Bundle preselected (`?bundle=slug`)
- Mobile checklist layout

————————————
SCREEN 3 — SOFTWARE CATALOG `/software`
- Title + short intro
- OS banner + OS switcher (same as installer)
- Content grouped by category
- Software cards: icon, name, short description, license badge, link to detail
- CTA on cards or section: “Add to installer” / “Open in Installer”
- No prices, no cart

————————————
SCREEN 4 — SOFTWARE DETAIL `/software/{slug}`
- Large icon, name, category, version, license (free/freeware)
- Description body
- Platforms / package manager availability (Windows winget, macOS Homebrew, Ubuntu apt/snap/flatpak as applicable)
- Primary CTA: “Add to Installer” → /installer
- Secondary: back to catalog
- Optional related software in same category
- Reserve a clean sidebar ad slot (AdSense-style rectangle) without looking spammy

————————————
SCREEN 5 — BUNDLES INDEX `/bundles`
- Title: curated app sets for common setups (e.g. Dev Essentials, Fresh Laptop, Media Kit)
- Grid of bundle cards: name, description, featured badge if any, row of included app icons, actions “View” and “Use this bundle”
- “Use this bundle” → /installer with those apps preselected

————————————
SCREEN 6 — BUNDLE DETAIL `/bundles/{slug}`
- Bundle name, description
- List of included software (icon, name, link to software detail)
- Primary CTA: “Use this bundle”
- Secondary: “Browse all software”

————————————
SCREEN 7 — BLOG INDEX `/blog`
- Title + “Tips, guides, and updates from ProLampX”
- Category filter chips (e.g. Guides, News, Windows, macOS, Ubuntu)
- Post cards: cover image, category, date, title, excerpt → article

————————————
SCREEN 8 — BLOG ARTICLE `/blog/{slug}`
- Cover, title, category, published date
- Readable long-form article layout
- Back to blog
- Light ad slot between content blocks if needed
- Optional related posts

————————————
SCREEN 9 — CONTACT `/contact`
- Headline + short help text
- Form: Name, Email, Subject, Message, Submit
- Success state after submit
- Sidebar/contact info area (email support style) — keep minimal

————————————
SCREEN 10 — CMS LEGAL PAGE `/page/{slug}`
Reusable template for Privacy Policy, Terms of Service, Cookie Policy:
- Page title
- Prose content area
- Clean typography, no marketing clutter

————————————
AUTH SCREENS (secondary; not in main nav — design for consistency only)
- Login `/login` — email, password, remember me, “Forgot password?”, optional passkey button. No social OAuth. No prominent Register (registration disabled in v1).
- Forgot password `/forgot-password`
- Reset password `/reset-password`
- Two-factor challenge `/two-factor-challenge` (OTP + recovery code)
- Verify email `/email/verify`
Keep these minimal, branded, and on-brand with the public chrome (logo + simple card form). Do NOT design an admin dashboard.

ACCOUNT SETTINGS (authenticated, non-admin — optional set)
- Profile `/settings/profile` — edit name/email, delete account
- Security `/settings/security` — password, 2FA, passkeys
- Appearance `/settings/appearance` — light/dark preference
Simple settings layout with left nav between the three pages. No Pro dashboard, no subscriptions UI.

————————————
USER FLOWS TO ILLUSTRATE (design as connected journeys / frames)
Flow A — Primary installer:
Home → Get Installer → OS detected → pick apps by category → Download Installer → see run guide → done

Flow B — Bundle shortcut:
Bundles → Use this bundle → Installer with preselected apps → Download

Flow C — Catalog discovery:
Software → Software detail → Add to Installer → Installer

Flow D — Content:
Blog → Article; Footer → Legal pages; Contact form submit success

Flow E — Auth recovery (secondary):
Login → Forgot password → Reset; Login → 2FA challenge

————————————
UX RULES
- Guest-first: installer works without login
- Always OS-aware; never show irrelevant OS apps without override context
- Selection metaphor is checklist → one download file (NOT cart/checkout)
- Only free/freeware license badges
- Clear empty, loading, and success states
- Accessible contrast, large tap targets on mobile
- Reserve subtle AdSense ad slots on Software detail, Blog, Installer without dominating the product UI
- Do not invent ecommerce, pricing, subscriptions, compare tools, site search, FAQ page, or admin panels

DELIVERABLES
Produce high-fidelity screens for all screens above (desktop + mobile), plus a simple site map and the three primary flows (Installer, Bundle→Installer, Software→Installer). Keep visual language consistent across the public product.
```

---

## Screen checklist

| # | Route | Screen |
|---|-------|--------|
| 1 | `/` | Home |
| 2 | `/installer` | Installer (core) |
| 3 | `/software` | Software catalog |
| 4 | `/software/{slug}` | Software detail |
| 5 | `/bundles` | Bundles index |
| 6 | `/bundles/{slug}` | Bundle detail |
| 7 | `/blog` | Blog index |
| 8 | `/blog/{slug}` | Blog article |
| 9 | `/contact` | Contact |
| 10 | `/page/{slug}` | Legal / CMS |
| — | `/login` etc. | Auth (secondary) |
| — | `/settings/*` | Account settings (optional) |

**Excluded:** `/admin/*` and all admin UI.
