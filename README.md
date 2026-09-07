# Better Tab — Official Landing Page 🚀

> **Mission Control & Spatial Tab Manager for Chrome & Brave**  
> Live at [https://bettertab.dev](https://bettertab.dev)

---

## 🌟 Overview

This repository hosts the official marketing website and interactive demonstration suite for **Better Tab — Mission Control**.

Built with a modern, high-conversion visual design:
- **Zero Third-Party Tracking**: 100% private, no invasive ad pixels or third-party bloat.
- **Pure Web Standards**: HTML5, Vanilla CSS3 with custom glassmorphic design tokens, and lightweight vanilla JavaScript.
- **Interactive Simulations**:
  - Live interactive Duplicate Tab Cleaner (simulates memory reclamation from 4.2 GB down to 3.6 GB).
  - Live Fuzzy Tab Search demo with real-time filtering.
  - Interactive Smart Hibernation toggle.
  - Transparent pricing calculator ($12 Lifetime vs $19.99/year Annual Pass).
  - Dynamic FAQ accordion.
- **100/100 Lighthouse Performance**: Sub-second load times, mobile-responsive layout.

---

## 📁 Repository Structure

```text
├── index.html          # High-conversion single-page application
├── landing.css         # Custom glassmorphic design system & typography
├── landing.js          # Interactive simulation engine & pricing switcher
├── CNAME               # Custom domain routing (bettertab.dev)
└── assets/             # Brand vectors, 3D renders, and hero mockups
    ├── logo-full.svg
    ├── logo-icon.svg
    ├── logo-dark.svg
    ├── logo-preview.jpg
    ├── hero-mockup.jpg
    └── press-banner.jpg
```

---

## 🚢 Deployment Instructions

### Option 1: Cloudflare Pages (Recommended)
1. In Cloudflare Dashboard, navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository `better-tab-landing`.
3. Configure build settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
4. Click **Save and Deploy**.
5. In **Custom domains**, add `bettertab.dev`.

### Option 2: GitHub Pages
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`. Click **Save**.
4. Enable **Enforce HTTPS**.

---

## 🔒 Source Code Separation
This repository contains **only public web marketing assets**. The proprietary browser extension source code, native background service workers, and store build artifacts reside securely in the private `better-tab-mission-control` repository.

---

## 📄 License
© 2026 Bernardo / Better Tab Team. All rights reserved.
