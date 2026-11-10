/*
 * Shared rendering + UI strings. Runs in the browser (window.JaluRender)
 * and in Node (tools/prerender.js) so the no-JS HTML matches the JS view.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.JaluRender = api;
})(typeof self !== "undefined" ? self : this, function () {
  var EMAIL = "bangjalu@gmail.com";
  var PLAY_TESTING = "https://play.google.com/apps/testing/";

  var STRINGS = {
    id: {
      "meta.title": "Testnest — Aplikasi Android",
      "meta.description": "Katalog aplikasi Android buatan Jalu. Banyak yang menyimpan data di perangkat; sebagian sekali beli dan tanpa iklan, sebagian menampilkan iklan.",
      "skip": "Langsung ke daftar aplikasi",
      "brand.sub": "Aplikasi Android",
      "nav.label": "Navigasi utama",
      "nav.apps": "Aplikasi",
      "nav.testing": "Jadi penguji",
      "lang.label": "Bahasa",
      "hero.kicker": "Katalog aplikasi · 2026",
      "hero.title": "Aplikasi kecil yang tetap berguna tanpa akun.",
      "hero.lede": "Aplikasi Android buatan Jalu. Banyak di antaranya menyimpan data hanya di perangkat Anda. Sebagian sekali beli dan tanpa iklan, sebagian menampilkan iklan — keterangannya tertulis jelas di tiap aplikasi.",
      "hero.status": "Sebagian besar masih dalam uji tertutup di Google Play dan dirilis bertahap.",
      "hero.count": "{n} aplikasi",
      "hero.groups": "{n} kategori",
      "apps.title": "Daftar aplikasi",
      "filter.label": "Tampilkan kategori",
      "filter.all": "Semua",
      "legend.title": "Arti label",
      "badge.noAds": "Tanpa iklan",
      "badge.oneTime": "Sekali beli",
      "badge.onDevice": "Data di perangkat",
      "badge.kids": "Untuk anak",
      "badge.hasAds": "Ada iklan",
      "legend.noAds": "tidak menampilkan iklan",
      "legend.oneTime": "dibayar sekali (aplikasinya atau versi Pro), bukan langganan",
      "legend.onDevice": "data Anda disimpan di ponsel",
      "legend.kids": "dibuat untuk anak-anak",
      "legend.hasAds": "menampilkan iklan, setidaknya di versi gratis",
      "card.more": "Selengkapnya",
      "card.open": "Lihat detail {name}",
      "detail.close": "Tutup",
      "detail.playTitle": "Judul di Google Play",
      "detail.package": "Nama paket",
      "detail.important": "Penting",
      "detail.soon": "Uji tertutup segera",
      "detail.soonNote": "Tautan penguji akan muncul di sini saat ujinya dibuka. Ingin dikabari?",
      "detail.notify": "Email {email}",
      "detail.join": "Jadi penguji",
      "detail.joinNote": "Membuka Google Play di tab baru. Anda bergabung dengan akun Google Anda langsung di Google Play — tidak ada formulir di situs ini.",
      "detail.privacy": "Kebijakan privasi akan tersedia di halaman Google Play aplikasi ini.",
      "detail.newTab": "(tab baru)",
      "testing.kicker": "Uji tertutup",
      "testing.title": "Jadi penguji",
      "testing.intro": "Sebagian besar aplikasi di sini masih dalam uji tertutup Google Play. Saat uji sebuah aplikasi dibuka, tombol “Jadi penguji” muncul di halaman aplikasinya.",
      "testing.step1": "Tekan “Jadi penguji” di halaman aplikasi. Google Play terbuka di tab baru.",
      "testing.step2": "Masuk dengan akun Google Anda, lalu pilih untuk menjadi penguji.",
      "testing.step3": "Pasang aplikasinya dari Google Play. Kadang perlu beberapa menit sampai tersedia.",
      "testing.noForm": "Tidak ada formulir pendaftaran atau milis di situs ini; pendaftaran penguji sepenuhnya lewat Google Play.",
      "testing.notifyTitle": "Belum ada uji yang dibuka?",
      "testing.notifyText": "Kirim email dengan nama aplikasi yang ingin Anda coba. Saya kabari saat ujinya dibuka.",
      "testing.notifyCta": "Kabari saya",
      "testing.subject": "Kabari saya saat uji tertutup dibuka",
      "testing.subjectApp": "Kabari saya saat uji {name} dibuka",
      "footer.status": "Sebagian besar aplikasi masih dalam uji tertutup dan dirilis bertahap.",
      "footer.privacy": "Kebijakan privasi tiap aplikasi akan tersedia di halaman Google Play-nya.",
      "footer.separate": "Situs ini terpisah dari jalupublishing.com.",
      "footer.top": "Kembali ke atas"
    },
    en: {
      "meta.title": "Testnest — Android apps",
      "meta.description": "A catalog of Android apps made by Jalu. Many keep data on the device; some are one-time purchase and ad-free, some show ads.",
      "skip": "Skip to the app list",
      "brand.sub": "Android apps",
      "nav.label": "Main navigation",
      "nav.apps": "Apps",
      "nav.testing": "Become a tester",
      "lang.label": "Language",
      "hero.kicker": "App catalog · 2026",
      "hero.title": "Small apps that stay useful without an account.",
      "hero.lede": "Android apps made by Jalu. Many of them keep your data only on your device. Some are a one-time purchase with no ads, some show ads — each app says which, clearly.",
      "hero.status": "Most are still in closed testing on Google Play and rolling out gradually.",
      "hero.count": "{n} apps",
      "hero.groups": "{n} categories",
      "apps.title": "The apps",
      "filter.label": "Show category",
      "filter.all": "All",
      "legend.title": "What the labels mean",
      "badge.noAds": "No ads",
      "badge.oneTime": "One-time purchase",
      "badge.onDevice": "Data on device",
      "badge.kids": "For kids",
      "badge.hasAds": "Has ads",
      "legend.noAds": "shows no ads",
      "legend.oneTime": "paid once (the app or its Pro version), not a subscription",
      "legend.onDevice": "your data is stored on the phone",
      "legend.kids": "made for children",
      "legend.hasAds": "shows ads, at least in the free version",
      "card.more": "More",
      "card.open": "View details for {name}",
      "detail.close": "Close",
      "detail.playTitle": "Title on Google Play",
      "detail.package": "Package name",
      "detail.important": "Important",
      "detail.soon": "Closed testing soon",
      "detail.soonNote": "A tester link will appear here once testing opens. Want to be told?",
      "detail.notify": "Email {email}",
      "detail.join": "Become a tester",
      "detail.joinNote": "Opens Google Play in a new tab. You join with your Google account directly on Google Play — there is no form on this site.",
      "detail.privacy": "A privacy policy will be available on this app's Google Play page.",
      "detail.newTab": "(new tab)",
      "testing.kicker": "Closed testing",
      "testing.title": "Become a tester",
      "testing.intro": "Most apps here are still in Google Play closed testing. When testing opens for an app, a “Become a tester” button appears on that app's page.",
      "testing.step1": "Press “Become a tester” on the app's page. Google Play opens in a new tab.",
      "testing.step2": "Sign in with your Google account and choose to become a tester.",
      "testing.step3": "Install the app from Google Play. It can take a few minutes to show up.",
      "testing.noForm": "There is no signup form or mailing list on this site; joining as a tester happens entirely on Google Play.",
      "testing.notifyTitle": "Nothing open yet?",
      "testing.notifyText": "Send an email with the name of the app you'd like to try. I'll let you know when its test opens.",
      "testing.notifyCta": "Notify me",
      "testing.subject": "Let me know when closed testing opens",
      "testing.subjectApp": "Let me know when testing opens for {name}",
      "footer.status": "Most apps are still in closed testing and rolling out gradually.",
      "footer.privacy": "Each app's privacy policy will be available on its Google Play page.",
      "footer.separate": "This site is separate from jalupublishing.com.",
      "footer.top": "Back to top"
    }
  };

  var BADGE_ORDER = ["hasAds", "noAds", "oneTime", "onDevice", "kids"];

  function t(lang, key, vars) {
    var s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.id[key] || key;
    if (vars) for (var k in vars) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function pick(obj, lang) {
    if (!obj) return "";
    return obj[lang] || obj.id || obj.en || "";
  }

  function testingUrl(app) {
    return app.testingUrl || PLAY_TESTING + encodeURIComponent(app.packageName);
  }

  function mailto(subject) {
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject);
  }

  function badgesHtml(app, lang) {
    var list = BADGE_ORDER.filter(function (b) { return (app.badges || []).indexOf(b) !== -1; });
    if (!list.length) return "";
    return '<ul class="badges">' + list.map(function (b) {
      return '<li class="badge badge--' + b + '">' + esc(t(lang, "badge." + b)) + "</li>";
    }).join("") + "</ul>";
  }

  function statusHtml(app, lang) {
    if (app.testingEnabled) {
      return '<div class="tester tester--open">' +
        '<a class="btn btn--primary" href="' + esc(testingUrl(app)) + '" target="_blank" rel="noopener">' +
        esc(t(lang, "detail.join")) + ' <span aria-hidden="true">↗</span><span class="visually-hidden"> ' + esc(t(lang, "detail.newTab")) + "</span></a>" +
        '<p class="tester-note">' + esc(t(lang, "detail.joinNote")) + "</p></div>";
    }
    return '<div class="tester tester--soon">' +
      '<p class="status-pill"><span class="status-dot" aria-hidden="true"></span>' + esc(t(lang, "detail.soon")) + "</p>" +
      '<p class="tester-note">' + esc(t(lang, "detail.soonNote")) + " " +
      '<a href="' + esc(mailto(t(lang, "testing.subjectApp", { name: app.name }))) + '">' + esc(t(lang, "detail.notify", { email: EMAIL })) + "</a></p></div>";
  }

  function detailBodyHtml(app, lang) {
    var notice = app.notice ? '<p class="notice"><strong>' + esc(t(lang, "detail.important")) + ":</strong> " + esc(pick(app.notice, lang)) + "</p>" : "";
    var playTitle = app.playTitle ? '<div><dt>' + esc(t(lang, "detail.playTitle")) + "</dt><dd>" + esc(app.playTitle) + "</dd></div>" : "";
    return notice +
      '<p class="detail-long">' + esc(pick(app.long, lang)) + "</p>" +
      statusHtml(app, lang) +
      '<dl class="facts">' + playTitle +
      '<div><dt>' + esc(t(lang, "detail.package")) + '</dt><dd><code>' + esc(app.packageName) + "</code></dd></div></dl>" +
      '<p class="privacy-note">' + esc(t(lang, "detail.privacy")) + "</p>";
  }

  function cardHtml(app, lang, index) {
    var num = (index < 9 ? "0" : "") + (index + 1);
    return '<li class="card" data-app="' + esc(app.id) + '">' +
      '<span class="card-num" aria-hidden="true">' + num + "</span>" +
      '<img class="app-icon" src="' + esc(app.icon) + '" alt="" width="72" height="72" loading="lazy" decoding="async">' +
      '<div class="card-body">' +
        '<h4 class="card-title"><a class="card-link" href="#app/' + esc(app.id) + '" aria-label="' + esc(t(lang, "card.open", { name: app.name })) + '">' + esc(app.name) + "</a></h4>" +
        '<p class="card-short">' + esc(pick(app.short, lang)) + "</p>" +
        badgesHtml(app, lang) +
        '<details class="nojs-more"><summary>' + esc(t(lang, "card.more")) + "</summary>" + detailBodyHtml(app, lang) + "</details>" +
      "</div></li>";
  }

  function listHtml(apps, groups, lang) {
    var i = 0;
    return groups.map(function (g) {
      var items = apps.filter(function (a) { return a.group === g.key; });
      if (!items.length) return "";
      var cards = items.map(function (a) { return cardHtml(a, lang, i++); }).join("");
      return '<section class="group" id="group-' + esc(g.key) + '" data-group="' + esc(g.key) + '" aria-labelledby="gh-' + esc(g.key) + '">' +
        '<header class="group-head"><h3 id="gh-' + esc(g.key) + '">' + esc(pick(g.label, lang)) + "</h3>" +
        '<span class="group-count">' + items.length + "</span></header>" +
        '<ul class="cards" role="list">' + cards + "</ul></section>";
    }).join("");
  }

  function mosaicHtml(apps) {
    return apps.map(function (a) {
      return '<li><a href="#app/' + esc(a.id) + '" tabindex="-1"><img src="' + esc(a.icon) + '" alt="" width="56" height="56" decoding="async"></a></li>';
    }).join("");
  }

  function filtersHtml(apps, groups, lang) {
    var btn = function (key, label, pressed) {
      return '<li><button type="button" class="chip" data-filter="' + esc(key) + '" aria-pressed="' + (pressed ? "true" : "false") + '">' + esc(label) + "</button></li>";
    };
    return btn("all", t(lang, "filter.all"), true) + groups.filter(function (g) {
      return apps.some(function (a) { return a.group === g.key; });
    }).map(function (g) { return btn(g.key, pick(g.label, lang), false); }).join("");
  }

  function legendHtml(lang) {
    return BADGE_ORDER.map(function (b) {
      return '<li><span class="badge badge--' + b + '">' + esc(t(lang, "badge." + b)) + "</span> " + esc(t(lang, "legend." + b)) + "</li>";
    }).join("");
  }

  return {
    EMAIL: EMAIL, STRINGS: STRINGS, t: t, esc: esc, pick: pick, mailto: mailto,
    testingUrl: testingUrl, badgesHtml: badgesHtml, detailBodyHtml: detailBodyHtml,
    listHtml: listHtml, mosaicHtml: mosaicHtml, filtersHtml: filtersHtml, legendHtml: legendHtml
  };
});
