/* Aplikasi Jalu — page behavior: language, filters, detail dialog. */
(function () {
  "use strict";
  var R = window.JaluRender;
  var APPS = window.JALU_APPS || [];
  var GROUPS = window.JALU_GROUPS || [];
  if (!R) return;

  var KEY = "jalu-lang";
  var state = { lang: "id", filter: "all", openId: null, returnFocus: null };

  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  function readLang() {
    try { var l = localStorage.getItem(KEY); if (l === "id" || l === "en") return l; } catch (e) {}
    return "id";
  }
  function saveLang(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function appById(id) { for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i]; return null; }
  function groupByKey(k) { for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].key === k) return GROUPS[i]; return null; }
  function usedGroups() { return GROUPS.filter(function (g) { return APPS.some(function (a) { return a.group === g.key; }); }); }

  /* ---------- rendering ---------- */
  function renderStatic() {
    var L = state.lang;
    document.documentElement.lang = L;
    $$("[data-i18n]").forEach(function (el) { el.textContent = R.t(L, el.getAttribute("data-i18n")); });
    $$("[data-i18n-content]").forEach(function (el) { el.setAttribute("content", R.t(L, el.getAttribute("data-i18n-content"))); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", R.t(L, el.getAttribute("data-i18n-aria"))); });
    $$(".lang-btn").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === L ? "true" : "false"); });
    var notify = $("#notify-link");
    if (notify) notify.href = R.mailto(R.t(L, "testing.subject"));
    $("#count-apps").textContent = R.t(L, "hero.count", { n: APPS.length });
    $("#count-groups").textContent = R.t(L, "hero.groups", { n: usedGroups().length });
  }

  function renderDynamic() {
    var L = state.lang;
    $("#mosaic").innerHTML = R.mosaicHtml(APPS);
    $("#legend").innerHTML = R.legendHtml(L);
    $("#filters").innerHTML = R.filtersHtml(APPS, GROUPS, L);
    $("#app-list").innerHTML = R.listHtml(APPS, GROUPS, L);
    applyFilter(false);
  }

  function applyFilter() {
    var f = state.filter;
    if (f !== "all" && !groupByKey(f)) f = state.filter = "all";
    $$("#filters .chip").forEach(function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-filter") === f ? "true" : "false"); });
    $$("#app-list .group").forEach(function (s) { s.hidden = !(f === "all" || s.getAttribute("data-group") === f); });
  }

  /* ---------- detail dialog ---------- */
  var dialog = $("#detail");
  var supportsDialog = dialog && typeof dialog.showModal === "function";

  function fillDetail(app) {
    var L = state.lang, g = groupByKey(app.group);
    var icon = $("#detail-icon");
    icon.src = app.icon;
    $("#detail-group").textContent = g ? R.pick(g.label, L) : "";
    $("#detail-title").textContent = app.name;
    $("#detail-short").textContent = R.pick(app.short, L);
    $("#detail-badges").innerHTML = R.badgesHtml(app, L);
    $("#detail-body").innerHTML = R.detailBodyHtml(app, L);
  }

  function openDetail(id) {
    var app = appById(id);
    if (!app || !dialog) return;
    if (!state.openId) state.returnFocus = document.activeElement;
    state.openId = id;
    fillDetail(app);
    if (!dialog.open) {
      if (supportsDialog) dialog.showModal(); else dialog.setAttribute("open", "");
      document.documentElement.classList.add("has-dialog");
    }
    $("#detail-close").focus();
  }

  function onDialogClosed() {
    var id = state.openId;
    state.openId = null;
    document.documentElement.classList.remove("has-dialog");
    if (/^#app\//.test(location.hash) && history.replaceState) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    var target = state.returnFocus;
    if (!target || !document.body.contains(target) || target === document.body) {
      target = $('.card[data-app="' + id + '"] .card-link');
    }
    if (target && target.focus) target.focus();
    state.returnFocus = null;
  }

  function closeDetail() {
    if (!dialog || !dialog.open) return;
    if (supportsDialog) dialog.close(); else { dialog.removeAttribute("open"); onDialogClosed(); }
  }

  function routeFromHash() {
    var m = /^#app\/([\w-]+)$/.exec(location.hash);
    if (m && appById(m[1])) openDetail(m[1]);
    else if (state.openId) closeDetail();
  }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var langBtn = e.target.closest(".lang-btn");
    if (langBtn) {
      var l = langBtn.getAttribute("data-lang");
      if (l !== state.lang) { state.lang = l; saveLang(l); renderStatic(); renderDynamic(); if (state.openId) fillDetail(appById(state.openId)); }
      return;
    }
    var chip = e.target.closest("#filters .chip");
    if (chip) { state.filter = chip.getAttribute("data-filter"); applyFilter(); return; }

    // Whole card is clickable; the real link stays the keyboard target.
    var card = e.target.closest(".card");
    if (card && !e.target.closest("a, button, summary, details")) {
      var link = $(".card-link", card);
      if (link) link.click();
    }
  });

  if (dialog) {
    if (supportsDialog) dialog.addEventListener("close", onDialogClosed);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeDetail(); });
    $("#detail-close").addEventListener("click", closeDetail);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !supportsDialog && state.openId) closeDetail(); });
  }
  window.addEventListener("hashchange", routeFromHash);

  /* ---------- boot ---------- */
  state.lang = readLang();
  renderStatic();
  renderDynamic();
  routeFromHash();
})();
