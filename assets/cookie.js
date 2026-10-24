document.body.insertAdjacentHTML("beforeend", `
  <button type="button" id="cookie-toggle" aria-expanded="false" aria-controls="cookie-popup" aria-label="Cookie info">🍪</button>

  <section id="cookie-popup" role="dialog" aria-labelledby="cookie-title" hidden>
    <div class="cookie-head">
      <h2 id="cookie-title">Freshly baked cookies!</h2>
      <button type="button" id="cookie-close" aria-label="Close">✕</button>
    </div>
    <p>To ensure this website functions properly and to be transparent about your privacy, we would like to explain how this site is built and what data is processed.</p>

    <details>
      <summary>Which external services and components are used?</summary>
      <ul>
        <li>GitHub repository: Used to host the repository (folder structure and files) and the website.</li>
        <li>DigitalGarden Webring Component: Connects this digital garden to the network of other digital gardens through a webring component.</li>
      </ul>
    </details>

    <details>
      <summary>How did I make this site?</summary>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Vscode/Vscodium</li>
        <li>GitHub</li>
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