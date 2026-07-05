# Busin 0: Wizardry Alternative Neo — EN translation site

Promo / info site for the unofficial English fan translation of **Busin 0: Wizardry
Alternative Neo** (PS2, SLPM-65378). Plain static site — vanilla HTML/CSS/JS, **no
framework and no build step**. Bilingual (DE / EN), dark gothic dungeon-crawler theme.

## Structure

```
public/                 <- the deployed folder (everything here is served as-is)
  index.html            single-page markup (sticky nav, hero, features, gallery,
                        download, bug-report, footer); every string carries data-i18n
  styles.css            dark gothic theme (gold / blood-red / parchment on near-black)
  app.js                i18n switcher (de/en), lightbox gallery, MD5 copy, scroll reveal
  favicon.svg           inline gold-on-black sword rune
  img/                  the six in-game screenshots
  patch/                busin0_en_v151.xdelta (the download) + README.md
assets/screenshots/     source PNGs (not deployed; copied into public/img)
package.json            deploy/preview scripts (no dependencies)
README_DEPLOY.md        Cloudflare Pages deploy instructions
```

## Preview locally

```
npm run preview
```

Runs `npx wrangler@latest pages dev public` and serves the site exactly as Cloudflare
Pages will. Open the printed `http://localhost:<port>`.

## Deploy

See **README_DEPLOY.md**. In short, from this directory:

```
npm run deploy
```

which runs `npx wrangler@latest pages deploy public --project-name=busin0-en --branch=main`.
The site publishes to its own Cloudflare Pages project (`busin0-en`) at
`https://busin0-en.pages.dev`. (Requires a Cloudflare login — `npx wrangler login` once
if the deploy reports an auth error.)

## Editing content / translations

All visible copy lives in the `I18N = { de, en }` map at the top of `public/app.js`,
keyed by the `data-i18n` attributes in `public/index.html`. To change wording, edit the
matching key for both languages. German copy uses the Swiss apostrophe (e.g. 83'000) and
avoids `ß` (uses `ss`).

## Updating the patch / screenshots

- Replace `public/patch/busin0_en_v151.xdelta` (and bump the version label in
  `index.html` / the `app.js` strings) when a new build ships.
- Screenshots live in `public/img/`; source copies are in `assets/screenshots/`.

## TODO before public launch

- Fill in the contact / subreddit / Discord placeholder (`bugs.contact` in `app.js`,
  mirrors README line 57 of the release).
