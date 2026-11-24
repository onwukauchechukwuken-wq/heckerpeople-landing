## 1. Color Palette
- **Background Primary:** `#FFFFFF`
- **Background Surface / Subtle Card:** `#F8FAFC`
- **Background Active / Tinted Surface:** `#E0F2FE`
- **Text Primary:** `#111827`
- **Headline Primary (Section & Ops Card Headlines):** `#0F172A`
- **Text Secondary / Body:** `#475569`
- **Text Muted / Caption:** `#6B7280`
- **Text Inverse:** `#FFFFFF`
- **Brand Primary (CTAs, active highlights, primary accents):** `#06B6E9`
- **Brand Primary Hover:** `#059EC9`
- **Brand Primary Subtle Tint:** `#E0F2FE` / `#F0F9FF`
- **Secondary Button Fill:** `#FFFFFF` with `#E5E7EB` border and `#111827` text
- **Border / Divider:** `#E5E7EB`
- **Status / Accent Green:** `#22C55E`

## 2. Typography
- **Headline Font (`H1`, `H2`, `H3`):** `Plus Jakarta Sans` (weights: 500, 600, 700)
- **Subheadline & UI Accent Font (`H4`, section lead-ins, eyebrows):** `Sora` (weights: 400, 500, 600)
- **Body Copy Font:** `Inter` or `Sora` (weights: 400, 500)
- **Type Scale & Font Mapping:**
  - **H1 (`Plus Jakarta Sans`):** `52px`–`56px` / `1.12` line-height / `-0.025em` tracking / Weight `600`–`700`
  - **H2 / Section Headlines (`Plus Jakarta Sans`):** `36px`–`40px` / `1.18` line-height / `-0.02em` tracking / Weight `500` (`font-medium`) / Color `#0F172A`
  - **H3 / Ops Card Headlines (`Plus Jakarta Sans`):** `28px`–`32px` / `1.22` line-height / `-0.015em` tracking / Weight `500` (`font-medium`) / Color `#0F172A`
  - **Section Subtexts / Lead Paragraphs (`Sora`):** `16px`–`20px` / `1.5` line-height / Weight `400` (`font-normal`)
  - **Section Headline & Subtext Container Width:** `max-w-[700px]`
  - **Body Copy:** `14px`–`16px` / `1.6` line-height / Weight `400`

## 3. Layout & Section Spacing
- **Standard Sections Below Hero:** `80px` left/right padding on laptop (`lg:px-[80px]`), `100px` left/right on wide desktop (`xl:px-[100px]`), `100px` top/bottom (`py-16 lg:py-[100px]`), and `px-6` on mobile (`px-6 md:px-12 lg:px-[80px] xl:px-[100px] py-16 lg:py-[100px]`).
- **Pricing Banner Section:** Outer pricing section/container uses `50px` left/right padding and `40px` top/bottom padding on desktop (`px-6 md:px-[50px] py-8 md:py-[40px]`); inner light-blue `rounded-3xl` pricing card uses `100px` left/right padding and `60px` top/bottom padding on desktop (`px-6 md:px-[100px] py-10 md:py-[60px]`).
- **Conversion CTA Visual Frame:** `rounded-3xl overflow-hidden` container with zero bottom overflow bleeding outside the rounded frame.

## 4. Media, Overlays & Brand Assets
- **Hero Container Height:** `850px` on desktop (`lg:h-[850px]`), with responsive heights on smaller viewports (`h-[600px] sm:h-[700px]`). The `<video>` and linear gradient overlay fill 100% of the frame (`absolute inset-0 h-full w-full`, video `object-cover`).
- **Hero Video Background:** HTML5 `<video autoPlay loop muted playsInline poster="/hero/hero-poster.png">` playing `/hero/hero-bg.mp4`.
- **Hero Linear Overlay:** Vertical linear gradient (`180deg`) layered above `<video>` and below text/CTA content (`pointer-events-none`), starting at `#000000` (`0%` opacity at `0%`) and ending at `#000000` (`60%` opacity at `100%`).
- **Platform Tabs (`public/features/`):**
  - Tab 1 (Payroll): `/features/tab1-payroll1.png`–`/features/tab1-payroll4.png`
  - Tab 2 (Biometric Attendance): `/features/tab2-biometric1.png`–`/features/tab2-biometric4.png`
  - Tab 3 (Talent Lifecycle): `/features/tab3-talent1.png`–`/features/tab3-talent4.png`
- **Operations (`public/ops/`):** `/ops/shift-rostering.png`, `/ops/kpi-vault.png`, `/ops/audit-log.png`
- **Mobile (`public/mobile/`):** `/mobile/mobile1.png`–`/mobile/mobile4.png`
- **Conversion CTA (`public/cta/`):** `/cta/dashboard.png`
- **Logos & Feature Icons (`public/logos/`):**
  - Brand mark (navbar & footer): `/logos/HeckerPeople Primary logo.svg`
  - Social proof logos: `/logos/Social Proof Logo1.svg`–`/logos/Social Proof Logo12.svg`
  - Platform feature icons: `/logos/Hand Money.svg` (Payroll), `/logos/Container.svg` (Biometric Attendance), `/logos/Users Group Two Rounded.svg` (Talent Lifecycle)

## 5. Motion & Micro-Interactions
- **Motion Library & Reduced Motion:** Powered by Magic UI primitives (`BlurFade`, `MagicCard`, `NumberTicker`, `BorderBeam`), Motion Primitives (`AnimatedBackground`, `TransitionPanel`), and `motion/react` wrapped in `<MotionConfig reducedMotion="user">`. All animations respect `prefers-reduced-motion` and animate GPU-composited properties only (`transform`, `opacity`, `filter`).
- **Hero Video Scale-Down & Entrance:** `useScroll` + `useTransform` tied to the Hero container scales `/hero/hero-bg.mp4` smoothly from `1.08` → `1` clipped full-bleed inside `overflow-hidden rounded-[28px]`, while the hero headline, subcopy, and CTAs enter on load with staggered `BlurFade`.
- **Crisp Headline & Subtext Reveals:** Section headlines and subtexts reveal on scroll (`once: true`, `amount: "some"`) via `BlurFade` (`6px`–`8px` travel, `0.32s`–`0.38s` duration, `ease: [0.22, 1, 0.36, 1]`).
- **Social Proof Logos:** Subtle staggered `BlurFade` entrance (`once: true`) across all 12 social proof logo cards with a gentle `hover:-translate-y-0.5` micro-lift.
- **Interactive 3-Tab Switcher & 2×2 Bento:** `<AnimatedBackground enableHover={false}>` spring highlight (`bounce: 0.15`, `duration: 0.4s`) paired with `<TransitionPanel>` (`8px` vertical settle + light blur) on the 2×2 bento grid.
- **Operations & Mobile Sections:** Subtle `MagicCard` pointer-following spotlights (`#06B6E9` / `#7DD3FC`) on Operations mockup containers and `once: true` scroll reveals across Operations and Mobile sections; tactile press feedback (`active:scale-[0.98]`) on CTA buttons.
- **Pricing & Conversion CTA Accents:** `NumberTicker` count-up on `2,200`, a single `BorderBeam` pass (`once: true`) around the light-blue `rounded-3xl` pricing card, and `once: true` `BlurFade` reveals on the bottom Conversion CTA inside its `overflow-hidden rounded-3xl` frame.
