# Unnamed+ company profile and site

The Unnamed+ studio website and the printable company profile, built with Next.js 16, the Arc UI library, and Hairline illustrations.

## Run it

```bash
npm install
npm run dev
```

- `/` — the studio site: home, work, services, outcomes, approach, process, studio, proof, next step
- `/company-profile` — the 20-sheet A4 profile, printable to PDF from the browser

```bash
npm run build    # production build, 16 static routes
npm run lint
npx tsc --noEmit
```

## Structure

| Path | What it is |
| --- | --- |
| `src/app/(site)/` | The public site. `layout.tsx` wraps every page in `SiteFrame`. |
| `src/app/company-profile/` | The A4 document, outside the site group so it prints without chrome. `print.css` maps each `.sheet` to one page. |
| `src/components/page/` | Layout primitives: `Section`, `PageIntro`, `Card`, `FeatureGrid`, `StepList`, `EvidenceStrip`, `Figure`, `LinkAction`. |
| `src/components/arc/` | Arc components and blocks, installed from the registry. `foundation.css` defines every token. |
| `src/components/ui/hairline.tsx` | Hairline figure wrapper, palette mapped to the Arc tokens. |
| `src/content/site.tsx` | Navigation, footer columns, and contact addresses. |
| `.claude/skills/arc/` | The Arc agent skill: design, copy, motion, accessibility, responsive, and the review checklist. |

## Design system

One token source. `src/components/arc/foundation.css` defines the palette, type scale, spacing, radii, motion, and shadows; `src/app/globals.css` imports it and maps the Tailwind theme onto the same names. Nothing else defines a color.

- Theme: `data-theme="light" | "dark"` on `<html>`. Accent: `data-accent`.
- Type: Geist for display, Inter for body, weights 400 and 500 only.
- Figures: `@lucasmarkes/hairline`, drawn on the Arc tokens and labelled for screen readers.

## Evidence policy

Case studies publish counts of what was structured and shipped, because those can be checked by opening the product. Revenue, lead, and conversion figures appear only with the client's analytics behind them, and client claims are labelled as the client's own. Unverified material is left as a visible slot, not filled in.

## Content still to supply

- Team names and portraits (`/team`, profile page 17)
- Approved testimonials and client marks (`/proof`, profile page 19)
- QR codes for the printed profile (pages 12, 14, 15, 20) — generate them at print time so they always point at the live site
- Registration, tax, and procurement documents when they have been verified
