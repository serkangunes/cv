# Serkan Gunes CV

An Astro site for Serkan Gunes' web CV and print-ready PDF. The CV content lives in [`src/pages/index.md`](./src/pages/index.md); layout and visual styling live in `src/layouts`, `src/components`, and `src/styles.css`.

## Commands

```sh
npm install
npx playwright install chromium
npm run dev
npm run build
npm run preview
```

`npm run build` type-checks the Astro project, generates `public/resume.pdf`, and builds the static site into `dist/`.

The project uses Astro, Poppins via Fontsource, and Playwright for PDF generation. The design uses plain CSS so the web and print layouts share the same small set of visual rules.
