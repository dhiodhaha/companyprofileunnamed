<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Unnamed+ company profile and site

A Next.js 16 app: the studio website under `src/app/(site)/` and the printable company profile at `/company-profile`.

## Layout

- `src/app/(site)/` — the public site, wrapped in `SiteFrame` by `src/app/(site)/layout.tsx`.
- `src/app/company-profile/` — the 20-sheet A4 profile. It sits outside the site group so it prints without the header and footer.
- `src/components/page/` — the layout primitives (`Section`, `PageIntro`, `Card`, `FeatureGrid`, `StepList`, `EvidenceStrip`, `Figure`). Sections own the container and the vertical rhythm; nothing inside adds a second gutter.
- `src/components/arc/` — Arc UI library, installed from the registry. Do not edit these files.
- `src/components/ui/hairline.tsx` — the Hairline figure wrapper, with its palette mapped to the Arc tokens.
- `src/content/site.tsx` — navigation, footer columns, and contact addresses.

## Arc rules

The full skill is in `.claude/skills/arc/`. The rules that matter most here:

1. Use an existing Arc component or block before writing UI. Read its markdown at `https://uiarc.dev/components/<id>/markdown` first, and follow its "When not to use".
2. Documented props only. Compose and wrap Arc components; never fork or restyle their internals.
3. One page container per page. Blocks fill their column with no second gutter or max width.
4. One `h1` per page, one primary button per surface. `LinkAction` is the anchor equivalent of an Arc button, because Arc buttons are buttons.
5. Semantic tokens only: `--background`, `--surface`, `--foreground`, `--text-secondary`, `--text-muted`, `--border`, `--accent`, `--radius-*`, `--text-*`, `--space-*`. No raw hex, no Tailwind color classes, no arbitrary font sizes.
6. Type: Geist for headings 30px and up, Inter for the rest, weights 400 and 500 only. Numbers that change or align use `tabular-nums`.
7. No eyebrow labels, no all caps, no em dashes in copy, no focus rings, no decorative gradients or glows.
8. Every animation needs a reduced-motion branch. Arc components ship theirs; keep them.
9. Check 390, 768, 1024, and 1440px: no sideways scroll, touch targets at least 44px.

## Evidence policy

Counts of shipped work are allowed and expected: product categories, services, languages, conversion paths. Business results (revenue, leads, conversion) are published only when the client has supplied the analytics. Client claims are labelled as the client's own. Unverified material stays a visible slot rather than being invented.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # types
```
