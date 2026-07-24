---
name: High-Contrast Core
colors:
  surface: '#0e1512'
  surface-dim: '#0e1512'
  surface-bright: '#333b38'
  surface-container-lowest: '#09100d'
  surface-container-low: '#161d1b'
  surface-container: '#1a211f'
  surface-container-high: '#242c29'
  surface-container-highest: '#2f3633'
  on-surface: '#dde4e0'
  on-surface-variant: '#bacac3'
  inverse-surface: '#dde4e0'
  inverse-on-surface: '#2b322f'
  outline: '#85948e'
  outline-variant: '#3c4a45'
  surface-tint: '#38debb'
  primary: '#ffffff'
  on-primary: '#00382d'
  primary-container: '#5ffbd6'
  on-primary-container: '#00725e'
  inverse-primary: '#006b58'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#ffffff'
  on-tertiary: '#393000'
  tertiary-container: '#fbe273'
  on-tertiary-container: '#756400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#5ffbd6'
  primary-fixed-dim: '#38debb'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#005142'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#fbe273'
  tertiary-fixed-dim: '#dec65a'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#0e1512'
  on-background: '#dde4e0'
  surface-variant: '#2f3633'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system focuses on a high-performance, technical aesthetic tailored for precision-driven environments. It targets professional users who require clarity and focus during extended periods of use. 

The style utilizes a **High-Contrast Dark** approach. It leverages deep depth through color layering rather than traditional skeuomorphism. The interface is characterized by sharp definition, expansive whitespace (despite the dark theme), and a sense of structural integrity. The emotional goal is to evoke a sense of deep focus, reliability, and technological sophistication.

## Colors
This design system uses a palette optimized for high-contrast accessibility in low-light environments. 

- **Primary:** A vibrant, glowing cyan-tinted blue for actionable elements and key highlights.
- **Secondary:** A stable light blue used for informational states and supporting accents.
- **Backgrounds:** A deep navy base (#0A192F) serves as the foundation to minimize eye strain.
- **Surfaces:** Containers and cards use a slightly elevated navy (#112240) to create clear structural separation without needing heavy borders.
- **Typography:** Text levels are strictly tiered using "Crisp White" (#CCD6F6) for maximum legibility and "Muted Slate" (#8892B0) for secondary metadata.

## Typography
The typography is built for technical clarity. **Hanken Grotesk** provides a clean, contemporary sans-serif feel for the majority of the UI, ensuring high legibility at all sizes. For technical data, labels, and code-adjacent elements, **Geist** is used to introduce a systematic, developer-friendly cadence.

Headlines should use tight letter spacing to maintain a "locked-in" professional look. Labels are set in uppercase when used for navigation or section headers to increase visual distinction.

## Layout & Spacing
The layout follows a strict **Fluid Grid** model based on an 8px square rhythm. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered with a max-width of 1440px.
- **Tablet:** 8-column grid with 24px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing is used to create grouping through proximity. Use larger gaps (`lg`, `xl`) to separate distinct functional sections and smaller gaps (`xs`, `sm`) to relate elements within a single component like a card or form group.

## Elevation & Depth
In this high-contrast dark environment, depth is communicated through **Tonal Layering** and **Subtle Glows** rather than traditional drop shadows.

1.  **Level 0 (Base):** #0A192F - The main application canvas.
2.  **Level 1 (Surface):** #112240 - Cards, sidebars, and navigation headers.
3.  **Level 2 (Overlay):** #1D2D50 - Modals, tooltips, and floating menus.

To emphasize priority, high-level elements like primary buttons or active states should use a subtle outer glow (0px 0px 12px) using the primary color at 20% opacity. Avoid using black shadows as they are invisible against the navy background; use darker navy or indigo shadows for soft occlusion if necessary.

## Shapes
The shape language is **Soft** (Level 1). This ensures the interface feels modern and approachable while maintaining the professional rigor of a technical tool.

- **Standard Elements:** 4px (0.25rem) radius for buttons and input fields.
- **Containers:** 8px (0.5rem) radius for cards and surface panels.
- **Large Components:** 12px (0.75rem) radius for modals and large hero sections.

The consistency of these radii creates a rhythmic visual flow that complements the geometric nature of the chosen typography.

## Components
- **Buttons:** Primary buttons use a solid primary color fill with navy text. Secondary buttons use a ghost style with a primary color border and primary color text.
- **Input Fields:** Backgrounds should be #112240 with a 1px border of #233554. Focus states must trigger a primary color border and a subtle glow.
- **Chips:** Small, low-profile indicators using #1D2D50 backgrounds and Label-sm typography.
- **Lists:** Items are separated by subtle 1px dividers (#233554). Hover states should shift the background to a slightly lighter tint of the surface color.
- **Cards:** No border by default; depth is created entirely by the contrast between #112240 (Card) and #0A192F (Background).
- **Data Tables:** Use the monospaced Geist font for numerical data to ensure column alignment and readability.