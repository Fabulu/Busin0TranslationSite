# Deploying the Busin 0 EN site to Cloudflare Pages

This is a plain static site (vanilla HTML/CSS/JS). There is **no build step** —
Cloudflare Pages serves the folder as-is. All web files (`index.html`, `styles.css`,
`app.js`, `img/`, `patch/`, `favicon.svg`) live in the **`public/`** subfolder, and
that folder is what gets deployed. Repo metadata (`package.json`, `README_DEPLOY.md`,
`assets/`, `node_modules`) stays outside `public/` and is never uploaded.

The site is published as its **own** Cloudflare Pages project named **`busin0-en`**,
fully independent of the portfolio's `fabiantrunz` project. Default live URL:
`https://busin0-en.pages.dev`.

## One-time prerequisites

- Node + npx (Node 20.x confirmed working). `wrangler` is run on demand via `npx`,
  so there is nothing to `npm install`.
- A Cloudflare login. If you have deployed the portfolio recently you are likely
  still authenticated. If the deploy below fails with an auth/token error, run:

  ```
  npx wrangler login
  ```

  This opens a browser once and stores an OAuth token globally
  (`%USERPROFILE%\.wrangler\config\default.toml`). Wrangler auto-refreshes it.

## Deploy (the command YOU run)

From this directory (`C:\Programmieren\WizardryTranslationSite`):

```
npm run deploy
```

That runs:

```
npx wrangler@latest pages deploy public --project-name=busin0-en --branch=main
```

- The **first** run auto-creates the `busin0-en` Pages project under your Cloudflare
  account, then uploads the site and prints the live `https://busin0-en.pages.dev` URL.
- Every later run publishes a new production deployment (`--branch=main`).

## Local preview (optional, no deploy)

```
npm run preview
```

Runs `npx wrangler@latest pages dev public` — a local server that serves the site
exactly as Cloudflare Pages will. Open the printed `http://localhost:<port>` URL.

## Patch download asset

The downloadable xdelta patch (`busin0_en_v151.xdelta`, ~910 KB) is a static binary
served from `public/patch/busin0_en_v151.xdelta` and linked from the page. Cloudflare
Pages serves arbitrary binary files directly — no config needed (per-file limit is
25 MB, far above 910 KB).

## Notes

- No `wrangler.toml`, no CI config, and no `account_id` pinning are required — all
  configuration is passed via the CLI flags in the `deploy` script.
- To attach a custom domain later: Cloudflare dashboard → Pages → `busin0-en` →
  Custom domains.
