# Frontend Redesign from prolampx_redesign

Rebuild public frontend visuals from Stitch HTML/PNG in `prolampx_redesign/`, keep every existing behavior, and discuss/approve phase-by-phase. **Admin stays untouched.**

## Locked decisions

| Topic | Decision |
|-------|----------|
| Homepage `/` | Agency: `company_portfolio_agency_home_prolampx_it` (+ dark) |
| Installer `/installer` | Shell from `home_prolampx` (+ dark); widgets from `installer_prolampx` as a section |
| Remaining pages | Redesign only pages that already exist |
| About / Services | No new routes; home scroll sections only |
| `high_contrast_core` | Out of scope |
| Admin | Out of scope |

## Phases

1. **Global colors** — single source in `resources/css/app.css` (`:root` / `.dark`), sync MUI/landing, Plus Jakarta Sans
2. **Homepage** — agency light/dark designs
3. **Installer** — product shell + installer widgets; preserve generate/download
4. **Rest** — software, bundles, blog, contact, auth

## Design → app mapping

| Design folder(s) | App target |
|------------------|------------|
| `company_portfolio_agency_home_prolampx_it` (+ dark) | `pages/home.tsx` + sections |
| `home_prolampx` (+ dark) | Top of `pages/installer/index.tsx` |
| `installer_prolampx` | Installer widget section |
| `software_catalog_prolampx` (+ dark) | `pages/software/index.tsx` |
| `software_detail_prolampx` | `pages/software/show.tsx` |
| `bundles_prolampx` | `pages/bundles/index.tsx` |
| `web_developer_pro_bundle_prolampx` | `pages/bundles/show.tsx` |
| `blog_prolampx` (+ dark) | `pages/blog/index.tsx` |
| `guide_…_blog_prolampx` | `pages/blog/show.tsx` |
| `contact_prolampx_it` (+ dark) | `pages/contact/index.tsx` |
| `login` / `forgot_password` / `reset_password` | `pages/auth/*` |
| `prolampx_core/DESIGN.md` | Dark token source |
| Light HTML `tailwind.config` colors | Light token source |

**Global chrome IA:** Home · Installer · Bundles · Software · Blog · Get Installer (+ Contact in footer). Agency About/Services/Products are in-page anchors on `/`.

## Token sources

**Light (from Stitch HTML):** `primary #002046`, `primary-container #1b365d`, `secondary #0057c2`, `background/surface #f7f9fb`, `surface-deep #0F2440`, surface-container scale, OS colors.

**Dark (from agency dark + prolampx_core):** `background #0F1214`, `primary #aec7f7`, `secondary #0057c2`, surface-container scale, `border-subtle` rgba white 0.1.

**Single hub:** `resources/css/app.css` — change tokens once for light + dark across public UI.

## Working rules

- Match design from HTML + PNG; no ecommerce/admin invention
- Preserve controllers, routes, forms — UI-only unless a small presentational prop is needed
- After each phase: light + dark, desktop + mobile smoke test
- Pause for review between phases

## Open questions

- When to add standalone `/about` and `/services` routes (designs exist)
- Whether legal CMS pages get a visual pass later

## Status

- [x] Plan document saved (`docs/frontend-redesign-plan.md`)
- [x] Phase 1 — Global colors
- [x] Phase 2 — Homepage
- [x] Phase 3 — Installer
- [x] Phase 4 — Remaining pages (software, bundles, blog, contact, auth)

### Phase 4 notes (implemented)

- Software catalog/detail, bundles index/detail, blog index/article, contact, login/forgot/reset redesigned with Phase 1 tokens.
- Headings use `text-primary dark:text-on-surface`; indigo gradients removed from public pages.
- Auth uses glass card layout via `auth-simple-layout` + ProLampLogo; Fortify forms preserved (no SSO).
- Contact keeps name/email/subject/message fields only.
/* test */
