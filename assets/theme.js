const root = document.documentElement;
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
root.dataset.theme = saved || "light";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const sync = () =>
    toggle.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
  sync();

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (err) {}
    sync();
  });
});