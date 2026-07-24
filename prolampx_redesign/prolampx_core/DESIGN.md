---
name: ProLampX Obsidian
colors:
  surface: '#111416'
  surface-dim: '#111416'
  surface-bright: '#37393c'
  surface-container-lowest: '#0c0f11'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e1e2e5'
  on-surface-variant: '#c4c6cf'
  inverse-surface: '#e1e2e5'
  inverse-on-surface: '#2e3133'
  outline: '#8e9099'
  outline-variant: '#44474e'
  surface-tint: '#aec7f7'
  primary: '#d6e2ff'
  on-primary: '#153058'
  primary-container: '#aec7f7'
  on-primary-container: '#3a537c'
  inverse-primary: '#465f89'
  secondary: '#afc6ff'
  on-secondary: '#002d6c'
  secondary-container: '#0057c2'
  on-secondary-container: '#c4d4ff'
  tertiary: '#d5e2ff'
  on-tertiary: '#143057'
  tertiary-container: '#aec7f6'
  on-tertiary-container: '#3a537b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f7'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2e4770'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#afc6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#004398'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#aec7f7'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#2e476f'
  background: '#111416'
  on-background: '#e1e2e5'
  surface-variant: '#323537'
  surface-deep: '#0f2440'
  border-subtle: rgba(255, 255, 255, 0.1)
  os-windows: '#0078d4'
  os-ubuntu: '#e95420'
  os-macos: '#1b1b1b'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-mobile: 16px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  container-max: 1200px
---

## Brand & Style
The ProLampX Obsidian design system is a sophisticated, technical aesthetic tailored for elite IT solutions and ecosystem engineering. It targets high-level stakeholders, CTOs, and innovators who value precision, scalability, and performance.

The visual style is a fusion of **Corporate Modern** and **Glassmorphism**, set against a deep "Dark Mode" foundation. It utilizes subtle background patterns (software grids), floating animations, and luminous primary accents to evoke a sense of digital craftsmanship. The brand personality is authoritative yet forward-thinking—prioritizing clarity through generous spacing and a refined typographic hierarchy.

## Colors
The palette is built on a deep monochromatic base with high-fidelity blue accents. 

- **Primary**: A soft, luminous blue (`#aec7f7`) used for interactive elements and brand identifiers.
- **Secondary**: A deep, saturated blue (`#0057c2`) for hover states and secondary emphasis.
- **Backgrounds**: The core workspace uses a near-black foundation (`#0f1214`), with layered "surfaces" providing depth.
- **Functional Accents**: Specific OS-branded colors are used for technical environment identifiers (Windows, Ubuntu, macOS).
- **Transparency**: Uses "surface-container/60" with backdrop blurs to maintain legibility over background patterns.

## Typography
Plus Jakarta Sans is used exclusively to maintain a modern, geometric, and clean feel. 

Headlines utilize aggressive weights (800) and negative letter-spacing for a bold, impactful presence in the hero section. Body text is kept simple at 16px to ensure readability across technical documentation and service descriptions. Label roles are uppercase and tracked out when used as section identifiers to create a rhythmic hierarchy.

## Layout & Spacing
The system follows a **Fixed Grid** philosophy with a maximum container width of 1200px. 

- **Vertical Rhythm**: Uses a geometric "stack" scale. `stack-xl` (64px) separates major sections, while `stack-md` (16px) handles internal element spacing.
- **Horizontal Flow**: Employs a 24px gutter. Mobile views shift to 16px margins to maximize screen real estate.
- **Adaptation**: On mobile, complex 3-column service grids collapse into a single-column stack, and navigation transitions from a floating glass pill to a fixed bottom action bar.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

- **Layer 0 (Background)**: The absolute base (`#0f1214`) with an optional 30% opacity software grid pattern.
- **Layer 1 (Surfaces)**: `surface-container` elements use subtle borders (`1px border-subtle`) to define boundaries.
- **Layer 2 (Interactive)**: Floating elements like the Navigation Bar use a `backdrop-blur-md` (12px) with a semi-transparent background (`/60`) and a large, diffused shadow (`shadow-[0px_4px_20px_rgba(0,0,0,0.4)]`).
- **Interaction Depth**: Cards use a `card-hover-up` effect, shifting -8px on the Y-axis with a cubic-bezier transition to feel responsive and tactile.

## Shapes
The shape language is "Hyper-Rounded," emphasizing a modern and friendly tech aesthetic.

- **Standard Containers**: Use `rounded-3xl` (approx 24px-32px) for a soft, premium appearance.
- **Interactive Pills**: Buttons and the main Nav Bar utilize `rounded-full` to stand out from structural components.
- **Small Elements**: Chips and tech icons use `rounded-xl` (12px) to maintain consistent curvature at smaller scales.

## Components
- **Buttons**: Primary buttons are high-contrast (Primary on Inverse-Surface) with `rounded-full`. Hover states involve a scale transform (`scale-95`) and a color shift to Secondary.
- **Cards**: Feature a `1px border-subtle`, `32px` padding, and the `card-hover-up` animation. Interior icons are housed in `rounded-2xl` containers with a `10%` primary tint.
- **Chips/Pills**: Used for feature highlights (e.g., "Digital Product Excellence"). These should have a subtle border and use `label-sm` typography.
- **Navigation**: The "Glass Pill" TopAppBar is the signature component, requiring `backdrop-filter: blur(12px)` and a thin subtle border.
- **Visuals**: Incorporate the `animate-float` keyframe for hero elements to provide a sense of life and "cloud" buoyancy.