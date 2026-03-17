# CLAUDE.md - WebCurriculumLuisFlor

## Project Overview

Personal website / online CV for Luis Flor, showcasing a dual professional profile: **Viticulture & Plant Science** (biology, grapevine research, vineyard consulting) and **Full-Stack Web Development** (4Geeks Academy graduate). Single-page application with portfolio of scientific articles and software projects.

## Tech Stack

- **Framework:** React 18.2 (Create React App)
- **UI Library:** React Bootstrap 2.5 + Bootstrap 5.2
- **Icons:** Font Awesome 7 (SVG, solid, brands) via `@fortawesome/react-fontawesome`
- **Styling:** Plain CSS (App.css, AppAbout.css, index.css) + Bootstrap grid
- **Font:** Muli (Google Fonts, loaded via CDN in index.html)
- **Font Awesome CDN:** Also loaded in index.html (v6.2.0)
- **Testing:** Testing Library (React + Jest DOM)
- **No routing library** — navigation is hash-based anchors (`#home`, `#about`, etc.)
- **No state management library** — local `useState` only
- **No i18n** — all content is in English

## Project Structure

```
src/
├── index.js              # React entry point
├── App.js                # Main component, composes all sections
├── App.css               # Main styles (~940 lines)
├── AppAbout.css           # About tab animations
├── index.css             # Global base styles
├── components/
│   ├── header.js         # Fixed navbar (AppHeader)
│   ├── carrousel.js      # Hero carousel with 3 slides (AppCarrousel)
│   ├── about.js          # Dual-tab about section (AppAbout)
│   ├── services.js       # 6 service cards (AppServices)
│   ├── works.js          # Scientific articles portfolio (AppWorks)
│   ├── projects.js       # Dev projects portfolio (AppProjects)
│   ├── testimonials.js   # References carousel (AppTestimonials)
│   ├── contact.js        # Social links (AppContact)
│   └── footer.js         # Footer + scroll-to-top (AppFooter)
└── assets/images/        # All image assets (~20 files)
public/
├── index.html            # HTML template (loads Google Fonts + FA CDN)
├── manifest.json         # PWA manifest
└── robots.txt
```

## Conventions

- **Component naming:** Functional components, exported with `App` prefix (e.g., `AppHeader`, `AppAbout`)
- **File naming:** Lowercase, no prefix (e.g., `header.js`, `carrousel.js`)
- **Data pattern:** Content arrays (carousel items, services, works, projects, testimonials) are defined inline within each component file — no separate data files
- **CSS colors:** Primary green `#0a8012`, accent red `#f41a1a`, bg white, text `#333`
- **Responsive breakpoints:** 1023px, 767px (media queries in App.css)

## Common Commands

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build → /build
npm test           # Run tests
```

## Sections / Navigation

Hash anchors in order: `#home` → `#about` → `#services` → `#works` → `#projects` → `#contact`

## Notes

- The About section uses a tab toggle (useState) to switch between Scientific and Tech profiles
- Footer has a scroll-to-top button that appears on scroll (useState + window event listener)
- No deployment config files present — build output is standard CRA
- PWA manifest exists but names are still generic ("React App")
