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

## GitHub Pages deployment

The `.github/workflows/pages.yml` workflow builds and publishes this site on every push to `main`. It can also be started manually from **Actions → Deploy to GitHub Pages → Run workflow**. The workflow uses Node.js 24, installs the locked dependencies with `npm ci`, and uploads only `build/` to GitHub Pages.

One-time repository setup:

1. Open **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions**.
3. Push the workflow and site changes to `main` (or merge a pull request into `main`).
4. Open **Actions → Deploy to GitHub Pages** and wait for both jobs to finish successfully.
5. Visit <https://glitcherj.github.io/czar/> and refresh a nested page such as <https://glitcherj.github.io/czar/fleet> to check direct links.

The workflow uses GitHub's automatic `GITHUB_TOKEN`; no personal access token or additional repository secret is needed. If the `github-pages` environment has deployment branch restrictions, allow `main` under **Settings → Environments → github-pages**.

The `homepage` value in `package.json` controls the `/czar/` asset path. `public/404.html` redirects direct links through the home page, and `public/index.html` restores the original path, query, and hash before React Router starts. If the repository name or hosting path changes, update these paths along with the routes and navigation links.

The old `npm run deploy` command publishes to the `gh-pages` branch and is only for the legacy **Deploy from a branch** setup. It is unnecessary with the Actions workflow. The generated `gh-pages` branch does not need to be merged into `main`.

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
