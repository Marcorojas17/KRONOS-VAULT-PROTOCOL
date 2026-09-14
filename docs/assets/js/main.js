/* ═══════════════════════════════════════════════════════════════════════════
   KRONOS VAULT PROTOCOL · INTERACTIVITY
   CC-BY-4.0 · v0.1.0
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  // ─── Mobile nav toggle ────────────────────────────────────────────────
  const toggle = document.querySelector(".nav-toggle");
  const list = document.getElementById("nav-list");

  if (toggle && list) {
    toggle.addEventListener("click", function () {
      const open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ─── Smooth anchor scroll offset for sticky nav ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      const id = this.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
