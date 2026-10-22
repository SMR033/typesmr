document.body.insertAdjacentHTML("beforeend", `
  <button type="button" id="cookie-toggle" aria-expanded="false" aria-controls="cookie-popup" aria-label="Cookie info">🍪</button>

  <section id="cookie-popup" role="dialog" aria-labelledby="cookie-title" hidden>
    <div class="cookie-head">
      <h2 id="cookie-title">Freshly baked cookies!</h2>
      <button type="button" id="cookie-close" aria-label="Close">✕</button>
    </div>
    <p>This site uses freshly baked cookies to enhance your browsing experience.</p>

    <details>
      <summary>What I use to build this site</summary>
      <ul>
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>VS Code</li>
        <li>GitHub</li>
      </ul>
    </details>

    <details>
      <summary>What cookies I use</summary>
      <ul>
        <li>Theme: remembers dark or light</li>
        <li>Functional: basic site stuff</li>
        <li>Analytics: counts visitors</li>
      </ul>
    </details>

    <div class="cookie-actions">
      <button type="button" id="cookie-accept">accepteren</button>
      <button type="button" id="cookie-reject">weigeren</button>
    </div>
  </section>
`);

const cookieToggle = document.getElementById("cookie-toggle");
const cookiePopup = document.getElementById("cookie-popup");

function setCookiePopup(open) {
  cookiePopup.hidden = !open;
  cookieToggle.setAttribute("aria-expanded", open);
}

cookieToggle.addEventListener("click", () => setCookiePopup(cookiePopup.hidden));
["cookie-close", "cookie-accept", "cookie-reject"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => setCookiePopup(false));
});