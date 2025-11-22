# EngiNerds Website Structure

## Top-Level Routing
- `/` → `Home`
- `/about` → `About`
- `/services` → `Services`
- `/portfolio` → `Portfolio`
- `/our-model` → `OurModel`
- `/consulting` → `ITConsulting`
- `/services/development` → `services/Development`
- `/services/ecommerce` → `services/ECommerce`
- `/services/saas-solutions` → `services/SaasSolutions`
- `/services/ai-automations` → `services/AIAutomations`
- `/services/it-support` → `services/ITSupport`
- `/industries/healthcare` → `industries/Healthcare`
- `/industries/finance` → `industries/Finance`
- `/industries/retail` → `industries/Retail`
- `/industries/manufacturing` → `industries/Manufacturing`
- `/technology/ai-ml` → `technology/AIMachineLearning`
- `/technology/cloud` → `technology/CloudInfrastructure`
- `/technology/mobile` → `technology/MobileDevelopment`
- `/technology/web` → `technology/WebTechnologies`

## Shared Layout
- `App` wraps all pages with:
  - `Navbar`
  - `cursor-glow` overlay (custom pointer)
  - `Footer`

## Core Components
- `components/Navbar` → Responsive navigation with mega menus, search, mobile menus.
- `components/Footer` → Company info, quick links, services list, contact details.
- `components/ServiceHero` → Hero banner used across service detail pages.
- `components/ServiceFeatures` → Grid for feature cards with 3D hover effects.
- `components/ServiceContact` → Contact CTA section for service pages.
- `hooks/useScrollAnimation` → Intersection Observer hook for scroll-triggered animations.

## Page Overview
- `pages/Home`
  - Hero with contact form
  - Process, services, case studies, portfolio preview, team features, contact CTA
- `pages/About`
  - Founder story, service highlights, industry verticals, AI capabilities, CTA
- `pages/Services`
  - Services hero, services grid, CTA
- `pages/Portfolio`
  - Portfolio hero, process summary, project grid, CTA
- `pages/OurModel`
  - Process explanation, delivery pillars, methodology, CTA (see file for detail)
- `pages/ITConsulting`
  - Consulting overview, engagement model, benefits, FAQs, contact CTA

### Service Detail Pages
- `pages/services/Development`
- `pages/services/ECommerce`
- `pages/services/SaasSolutions`
- `pages/services/AIAutomations`
- `pages/services/ITSupport`
  - Each imports `ServiceHero`, `ServiceFeatures`, plus page-specific sections & `ServiceContact`.

### Industry Pages
- `pages/industries/Healthcare`
- `pages/industries/Finance`
- `pages/industries/Retail`
- `pages/industries/Manufacturing`
  - Highlight sector-specific capabilities, success metrics, engagement CTA.

### Technology Pages
- `pages/technology/AIMachineLearning`
- `pages/technology/CloudInfrastructure`
- `pages/technology/MobileDevelopment`
- `pages/technology/WebTechnologies`
  - Describe stacks, offerings, wins, with CTAs linking to contact/portfolio.

## Styling & Assets
- `index.css` → Tailwind directives plus custom cursor, glow, glassmorphism, animations.
- `tailwind.config.js` → Custom color palette, typography, shadows, animations.
- Static imagery stored under `public/portfolio` and remote URLs.

## Backend (Contact API)
- `server/` (Express + Nodemailer) handles contact form submissions via `REACT_APP_CONTACT_API_URL`.

## Development Scripts
- `npm start` → Run React dev server.
- `npm run build` → Production build.
- `npm run server` / `npm run dev` → Express server for contact endpoint.
