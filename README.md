# Nitish Yeluru | Portfolio

Personal portfolio of Nitish Yeluru, a full-stack and GenAI engineer focused on developer tooling and web applications.

This repository contains the portfolio website: background, technical skills, experience, projects, open-source contributions, education, and contact links.

## Features

- Responsive, single-column layout with section navigation.
- Light, dark, and system themes, with the selected theme saved locally.
- Searchable command menu, opened with `Cmd + K` or `Ctrl + K`, for navigation, contact links, and theme changes.
- Expandable project entries and an experience timeline.
- Open-source contribution links and organization logos.
- Page metadata for search and social previews.

## Built with

- **Next.js App Router** for the application structure and static export.
- **React and TypeScript** for UI components and typed portfolio data.
- **Tailwind CSS** for styling.
- **Motion** for animations.
- **Lucide React and Simple Icons** for icons.

## Local development

Install dependencies from the repository root:

```bash
npm install
```

Start the Next.js development server:

```bash
npx next dev
```

Open `http://localhost:3000`.

The current `npm run dev` and `npm run preview` scripts target Vite. Use the Next.js command above for the app in `src/app`.

## Checks and build

Run the TypeScript check:

```bash
npm run lint
```

Despite its name, this script runs `tsc --noEmit`, not ESLint.

Build the static site:

```bash
npm run build
```

The Next.js configuration uses `output: "export"`, which writes the static site to `out/`. Run the TypeScript check separately: the build configuration skips type and lint errors.

## Repository structure

```text
src/
  app/
    globals.css       Global styles
    layout.tsx        Root layout, theme initialization, and page metadata
    page.tsx          Portfolio page
    not-found.tsx     Not-found page
  components/         Portfolio sections, navigation, theme controls, and command menu
  data/
    user.ts           Profile, skills, experience, projects, and contact data
public/
  logos/              Organization logos
next.config.ts        Next.js configuration
```

`src/App.tsx` and `index.html` contain a separate React entry layout. The Next.js page is in `src/app/page.tsx`.

## Customize

- Update `src/data/user.ts` to change profile details, skills, experience, projects, education, and social links.
- Update components in `src/components/` to change individual sections or interactions.
- Update `src/app/layout.tsx` to change the page title and social metadata.
- Update `src/app/globals.css` to change global styles.
- Place organization logos in `public/logos/`.

## Connect

Contact and social links are maintained in `src/data/user.ts` and displayed on the website.
