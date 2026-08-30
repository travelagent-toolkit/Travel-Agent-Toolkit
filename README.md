# Travel Agent Toolkit

**Create. Quote. Sell. Faster.**

A production-quality, frontend-only SaaS UI for Indian travel agents and small travel agencies — quotations, itineraries, cost calculations, WhatsApp messaging and currency conversion in one toolkit.

> **Phase 1 scope:** This is a frontend-only build. There is no backend, database, real authentication, real payments, or live AI/currency APIs. All data is realistic mock data so the full product can be previewed and demoed. Actions that would require a backend (PDF export, WhatsApp sending, payments) show an in-app notification instead of failing silently.

## Tech stack

- React 19 + Vite
- React Router (client-side routing)
- Plain modern CSS (design tokens + component styles, no CSS framework)
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at the URL Vite prints (typically `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Folder structure

```
src/
  components/   Reusable UI: Button, Input, Cards, Modal, Toast, Navbar, Footer, Sidebar, Icon
  layouts/      PublicLayout (marketing site) and DashboardLayout (app shell with sidebar)
  pages/        Route-level pages
    tools/      The five tool pages (quotation, itinerary, calculator, whatsapp, currency)
    dashboard/  Logged-in app pages (dashboard, quotations, customers, itineraries, settings, billing)
  context/      ToastContext for app-wide notifications
  hooks/        usePageMeta for per-page <title> and meta description
  data/         Mock data used across the app
  utils/        Formatting helpers (INR currency, numbers, dates)
  styles/       tokens.css (design tokens) and app.css (component + page styles)
```

## Routes

**Public**
`/`, `/features`, `/tools`, `/tools/quotation`, `/tools/itinerary`, `/tools/calculator`, `/tools/whatsapp`, `/tools/currency`, `/pricing`, `/about`, `/contact`, `/login`, `/register`, `/forgot-password`, `/privacy`, `/terms`

**App (dashboard shell)**
`/dashboard`, `/quotations`, `/customers`, `/itineraries`, `/settings`, `/billing`

Unmatched routes render a 404 page.

## Deployment (Render Static Site)

1. Push this repository to GitHub.
2. In Render, create a **Static Site** and connect the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add a rewrite rule so client-side routes work on refresh:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: Rewrite

No environment variables are required for Phase 1.

## What's mocked / not yet real

- **Authentication** — Login/Register perform client-side validation only, then simulate a successful sign-in and route to `/dashboard`. No session is created.
- **PDF export & WhatsApp sharing** — buttons show a toast notification explaining this arrives in Phase 2.
- **AI itinerary generation** — the Itinerary Generator returns a clearly-labeled sample itinerary rather than a real AI response.
- **Currency rates** — fixed demo rates; the page explicitly states they are not live.
- **Payments/Billing** — the Billing page displays current plan and usage from mock data; upgrade buttons do not charge a card.
- **Data persistence** — quotations, customers, and drafts created in the UI live only in component state for the session; nothing is saved to a database.

## Known Phase 2 / Phase 3 follow-ups

- Backend API + database for quotations, customers, itineraries
- Real authentication (sessions, password reset)
- PDF generation and WhatsApp Business API integration
- Live currency exchange rate API
- Real payment gateway integration for Billing/Upgrade
- Persisted file uploads for agency logos
