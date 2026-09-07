# sid200026.github.io

Personal site — [sid200026.github.io](https://sid200026.github.io)

Astro + React + Tailwind, statically rendered. No JavaScript is shipped to the
browser; React is used purely as a build-time templating layer.

## Editing content

All copy lives in [`src/data/profile.ts`](src/data/profile.ts), typed by
[`src/data/types.ts`](src/data/types.ts). Adding a role or publication means
adding an object there — no component changes required.

Role summaries support inline links via ordered `{link}` placeholders:

```ts
{
  title: "Research Scientist 2",
  period: "Jul 2025 —",
  current: true,
  summary: "GitHub Copilot — {link} and {link}.",
  summaryLinks: [
    { text: "auto-mode model routing", href: "https://..." },
    { text: "HydraFusion", href: "https://..." },
  ],
}
```

Setting `current: true` marks the role with a green tick in the timeline.

## Commands

| Command         | Action                                 |
| --------------- | -------------------------------------- |
| `npm run dev`   | Dev server at `localhost:4321`         |
| `npm run build` | Static build to `dist/`                |
| `npm run check` | TypeScript and Astro diagnostics       |

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which typechecks, builds, and publishes to GitHub Pages.
