---
name: Legacy Desktop
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3e4949'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f0f0'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#006a6a'
  primary: '#006565'
  on-primary: '#ffffff'
  primary-container: '#008080'
  on-primary-container: '#e3fffe'
  inverse-primary: '#76d6d5'
  secondary: '#626200'
  on-secondary: '#ffffff'
  secondary-container: '#e7e700'
  on-secondary-container: '#666600'
  tertiary: '#474eb7'
  on-tertiary: '#ffffff'
  tertiary-container: '#6068d2'
  on-tertiary-container: '#fcf8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#93f2f2'
  primary-fixed-dim: '#76d6d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#eaea00'
  secondary-fixed-dim: '#cdcd00'
  on-secondary-fixed: '#1d1d00'
  on-secondary-fixed-variant: '#494900'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bfc2ff'
  on-tertiary-fixed: '#00006e'
  on-tertiary-fixed-variant: '#3239a3'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '900'
    lineHeight: 24px
    letterSpacing: 0.5px
  title-md:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
  body-md:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-mono:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 14px
spacing:
  pixel-unit: 1px
  bevel-width: 2px
  gutter: 4px
  window-padding: 8px
  container-margin: 16px
---

## Brand & Style
The design system draws directly from the "Golden Age" of desktop computing, specifically the mid-90s era of 16-bit graphical user interfaces. The brand personality is nostalgic, technical, and unapologetically digital-functional. It targets users who appreciate retro-computing aesthetics or require a highly structured, "no-nonsense" interface that mimics the tactile reliability of early workstations.

The style is **Skeuomorphic Digital**. It uses heavy beveling to simulate physical height on a 2D screen. The emotional response should be one of "operational control"—the feeling of sitting in front of a high-end workstation from 1995. Visual signatures include CRT scanline overlays, dithered gradients, and pixel-perfect alignment.

## Colors
The palette is restricted to the classic 8-bit/16-bit system colors. 
- **The Canvas:** A solid `#008080` (Teal) represents the default desktop workspace.
- **The Chrome:** All UI windows and buttons use `#C0C0C0` (Silver/Gray) as their base face color.
- **Accents:** `#FFFF00` (Pixel Yellow) is reserved exclusively for organizational icons like folders. `#000080` (Navy) is used for active window title bars to indicate focus.
- **Contrast:** Pure Black (`#000000`) and White (`#FFFFFF`) are used for the "beveled" lighting effects and high-legibility text.

## Typography
To replicate the low-resolution aliased look on modern screens, the design system utilizes high-readability sans-serifs at small, specific pixel sizes. **Libre Franklin** is used for system labels and window titles to mimic the weight of MS Sans Serif. **Courier Prime** provides the monospaced look for status bars and data fields.

Typography must never use anti-aliasing if possible; it should appear crisp and "snapped" to the pixel grid. All text is left-aligned by default to maintain the rigid structural feel of early operating systems.

## Layout & Spacing
The layout follows a **Strict Fixed Grid** logic. Every element is aligned to a 4px baseline. 
- **Windows:** Elements are contained in "Windows" with defined title bars. Windows should not fluidly stretch but rather "snap" to specific dimensions.
- **Desktop Grid:** Icons on the background canvas are arranged in a rigid grid (typically 72x72px cells).
- **Bevels:** Spacing is defined by the "Outset" and "Inset" bevels. An element's margin is often dictated by the width of its border-frame (usually 2px).

## Elevation & Depth
Elevation is achieved through **High-Contrast Geometric Beveling** rather than shadows.
- **Raised (Outset):** Top and Left borders are White (`#FFFFFF`); Bottom and Right borders are Dark Gray (`#808080`). The outermost Bottom/Right edges are Black (`#000000`). This is used for buttons and unselected tabs.
- **Sunken (Inset):** Top and Left borders are Dark Gray; Bottom and Right borders are White. This is used for input fields, text areas, and the main viewport of a window.
- **Active State:** When a button is clicked, it toggles from "Outset" to "Inset," and the text shifts 1px down and to the right to simulate physical depression.

## Shapes
The design system strictly uses **Sharp (0px)** corners. There are no rounded corners in this era of computing. Every button, window, and selection marquee is a perfect rectangle. Any "curvatures" (such as in icons) must be rendered via visible 1px stepped pixels.

## Components
- **Windows:** The primary container. Includes a Navy (`#008080`) title bar when active, a "Close" button [X] with an outset bevel, and a 2px silver frame.
- **Command Buttons:** Rectangular with a 2px outset bevel. Text is centered. Focused buttons have a 1px black dotted inner focus ring.
- **Start Menu:** A vertical stack of list items housed in an outset container. Icons are 16x16px or 32x32px pixel art.
- **Input Fields:** 2px inset bevel with a white background. Text cursor is a solid 1px blinking block.
- **Tree Lists:** Used for navigation. Includes [+] and [-] boxes for collapsing/expanding folders, connected by 1px dotted lines.
- **Scanline Overlay:** A global fixed-position overlay using a repeating linear gradient to simulate the CRT phosphorous mask.
- **Folders:** Iconography must use the #FFFF00 yellow with a black 1px outline and a slight "page fold" in the top right.