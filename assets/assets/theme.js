const root = document.documentElement;
root.dataset.theme = localStorage.getItem("theme") || "light";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
});