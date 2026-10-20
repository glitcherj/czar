# CZAR PCO Website

The CZAR PCO public website is a responsive React application for the company's PCO vehicle hire service. It includes the home, fleet, electric fleet, company information, FAQ, and blog pages.

## Requirements

- Node.js 18 or newer
- npm (the repository uses `package-lock.json`)

## Getting started

Install the locked dependencies and start the development server:

```sh
npm ci
npm start
```

The app opens at <http://localhost:3000/czar/>. The development server supports hot reload.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Run the local development server. |
| `npm run build` | Create an optimized production build in `build/`. |
| `npm test` | Run the Create React App test runner in watch mode. |
| `npm run deploy` | Build and publish `build/` to GitHub Pages using `gh-pages`. |

`npm run deploy` publishes to the GitHub Pages project site configured by the `homepage` value in `package.json`. It requires GitHub credentials and the `gh-pages` branch publishing setup.

## Project structure

```text
public/                 Static HTML shell, app manifest, favicon, robots.txt
src/
  assets/               Logos, icons, and local image assets
  components/           Shared page components
  pages/                Route-level pages, including blog articles
  Router/               React Router route definitions
  Static/               Vehicle, FAQ, testimonial, and blog content
  Styles/               Sass foundations, component styles, and page styles
```

The app uses React 18, React Router 6, Sass, and Swiper. The production build is managed by Create React App (`react-scripts`).

## Routes

Routes use the `/czar` base path to match the GitHub Pages project site:

- `/czar/` — home
- `/czar/fleet` and `/czar/fleet/:id` — fleet and vehicle details
- `/czar/ev-fleet` — electric fleet
- `/czar/blog` and `/czar/blog/:slug` — blog and article pages
- `/czar/faq` — searchable, topic-filtered FAQs
- `/czar/about-us`, `/czar/privacy-policy`, `/czar/terms`

When adding a route, keep its path in `src/Router/index.jsx` aligned with this base path and with the links used by the site.

## Updating site content

- Blog cards and published article copy live in `src/Static/BlogCardData.js`. An article needs a unique `link`, a matching route slug, and `content` paragraphs to render as a full article page.
- FAQ topics and answers live in `src/Static/FAQ.js`.
- Fleet inventory and vehicle details live in the related files under `src/Static/`.
- Local images should be imported from `src/assets/` so the production bundler can fingerprint them.

## Accessibility and motion

Interactive elements use semantic controls and visible keyboard focus. Section reveals and smooth in-page scrolling honor the user's `prefers-reduced-motion` setting. Keep new animations optional and preserve keyboard access when changing components.
