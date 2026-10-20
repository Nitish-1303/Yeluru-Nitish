# Nitish Yeluru | Portfolio

A static frontend portfolio for Nitish Yeluru, built with Next.js and exported as a pure client-side site. Live at [yelurunitish.tech](https://www.yelurunitish.tech).

## Features

- Responsive single-column portfolio layout in a warm light editorial style
- Hero, proof, projects, open source, and contact sections tuned for a 30-second read
- Merged open-source PR showcase with links to the real pull requests
- Social links and contact CTA
- Static export pipeline for deployment to Vercel or any static host

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Motion for subtle UI animation
- Lucide icons and Simple Icons

## Local development

Install dependencies:

```bash
npm install
```

Start the app locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation and build

Run the TypeScript check:

```bash
npm run lint
```

Build the static site:

```bash
npm run build
```

The app is configured for static export in `next.config.ts`, so the production output is written to `out/`.

## Repository structure

```text
src/
  app/
    globals.css       Global styles and theme setup
    layout.tsx        Root layout and page metadata
    page.tsx          Portfolio home page
    not-found.tsx     Not-found route
  components/         UI sections and navigation
  data/
    user.ts           Content source for profile, projects, and open source work
public/
  logos/              Organization and partner logos
next.config.ts        Static export configuration
metadata.json         App metadata used by the client shell
```

## Customization

- Update `src/data/user.ts` for profile, project, open source, and contact details.
- Update components in `src/components/` for layout and interactive behavior.
- Update `src/app/layout.tsx` for page metadata.
- Update `src/app/globals.css` for styling changes.

This project intentionally does not include any backend server or API routes; it is a pure frontend application.
