# Testnest — portfolio aplikasi Android Jalu

Testnest is the public catalog of Jalu's Android apps, built for GitHub Pages at
`https://jalusaja.github.io/testnest/` (repo `jalusaja/testnest`). Plain HTML, CSS and JS:
no framework and no build step. Every path is relative, so the site also works
opened locally or served from `/`.

```
index.html        page shell (Indonesian text baked in, no-JS fallback)
404.html          GitHub Pages "not found" page (self-contained)
css/style.css     all styles (light + dark, reduced motion)
js/apps.js        ← ALL app data lives here
js/render.js      UI strings (ID + EN) and HTML rendering, shared with the prerender tool
js/main.js        language toggle, category filter, detail dialog
tools/prerender.js optional: bakes the list into index.html for visitors without JS
icons/            512 px app icons (PNG)
favicon.svg
.nojekyll         tells GitHub Pages to serve files as-is
```

Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000/.

## Add an app

1. Put a square 512 px PNG icon in `icons/`, e.g. `icons/my-app.png`.
2. Add an object to `window.JALU_APPS` in `js/apps.js` (copy an existing one):

   ```js
   {
     id: "my-app",                       // slug, used in the link #app/my-app
     name: "My App",
     playTitle: "My App: Short title",   // optional
     packageName: "id.myapp.app",
     icon: "icons/my-app.png",
     group: "util",                      // a key from JALU_GROUPS at the top of the file
     badges: ["noAds", "oneTime", "onDevice"],
     testingEnabled: false,
     short: { id: "Satu kalimat.", en: "One sentence." },
     long:  { id: "Paragraf lebih panjang.", en: "A longer paragraph." },
     notice: { id: "Catatan penting (opsional).", en: "Important caveat (optional)." }
   }
   ```

   Allowed badges: `noAds` (Tanpa iklan), `oneTime` (Sekali beli), `onDevice`
   (Data di perangkat), `kids` (Untuk anak), `hasAds` (Ada iklan). Never use
   `noAds` on an app that shows or plans ads; use `hasAds` instead.
   The order of apps inside a group follows their order in the file.
3. Optional but recommended: run `node tools/prerender.js`. It checks the data
   (unique ids, icons exist, both languages filled, no `noAds`+`hasAds`) and
   refreshes the no-JS copy of the list inside `index.html`. If you skip it, the
   site still shows the new app for everyone with JavaScript.

To add a category, add `{ key, label: { id, en } }` to `window.JALU_GROUPS`.

## Turn on the "Jadi penguji" (Become a tester) button

All apps currently have `testingEnabled: false`, which shows a quiet
"Uji tertutup segera / Closed testing soon" note with a mailto link instead of a
button. Before switching an app on, open
`https://play.google.com/apps/testing/<packageName>` in a private window and check
that the closed-testing track really is open to anyone with the link (otherwise
visitors get a 404).

Then set, for that app:

```js
testingEnabled: true,
```

The button opens `https://play.google.com/apps/testing/<packageName>` in a new tab.
If Play gives you a different opt-in link, set `testingUrl: "https://..."` to
override it. Run `node tools/prerender.js` afterwards to update the no-JS copy.

## Content rules

- No promo or reviewer codes, keystore details, SHA fingerprints, or prices
  (say "sekali beli" / "one-time purchase").
- No Play Store production links until an app is actually in production.
- No privacy-policy links until the URL has been checked to load.
- This site is separate from jalupublishing.com.

Contact: bangjalu@gmail.com
