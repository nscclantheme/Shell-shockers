// ==UserScript==
// @name        🔥 NSC Clan Theme 🔥
// @namespace    shellshockers.nsclan.premium.final
// @version      22.0
// @description  NSC Clan Premium Theme and Loading Screen
// @match        https://shellshock.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  "use strict";

  const STYLE_ID = "ss-nsc-special-style";

  if (document.getElementById(STYLE_ID)) return;

  const css = document.createElement("style");
  css.id = STYLE_ID;

  css.textContent = `
    /* ===== NSC CLAN THEME COLORS ===== */
    :root {
      --nsc-purple: #bc13fe;
      --nsc-dark: #0a0512;
      --nsc-white: #f3e6ff;
      --nsc-cyan: #00f0ff;
      --nsc-yellow: #ffee00;

      --ss-blue00: #1b0d2b;
      --ss-blue0: #150a21;
      --ss-blue1: #bc13fe;
      --ss-blue2: #9d00e6;
      --ss-blue3: #2e114d;
      --ss-blue4: #1d0736;
      --ss-blue5: #0a0512;
      --ss-blue6: rgba(21,10,33,.95);
      --ss-blue7: #f3e6ff;
      --ss-blue8: #d1b3ff;
      --ss-blue2clear: rgba(188,19,254,0);
      --ss-blue2alpha7: rgba(188,19,254,.7);
      --ss-blueshadow: rgba(10,5,18,.9);
      --ss-blueblend1: linear-gradient(135deg,#bc13fe,#590080);
      --ss-fieldbg: linear-gradient(#1b0d2b,#150a21,#0a0512);
      --ss-box-shadow-1: .16em .16em 0 rgba(188,19,254,.4);
      --ss-box-shadow-2: .15em .15em 0 rgba(243,230,255,.6);
      --ss-text-shadow-1: .1em .1em 0 rgba(188,19,254,.5);
      --ss-lightoverlay: linear-gradient(180deg,rgba(21,10,33,.96),rgba(10,5,18,.96));
    }

    html, body {
      background-color: var(--nsc-dark) !important;
      color: #fff !important;
    }

    /* ===== PANELS ===== */
    .popup_window,
    .play-panel-panels,
    .ss_card,
    #user-box,
    #server-box,
    #shop-box,
    .inventory-container {
      background: rgba(21,10,33,.96) !important;
      border: 2px solid var(--nsc-purple) !important;
      box-shadow: 0 0 20px rgba(188,19,254,.3) !important;
      border-radius: 10px !important;
    }

    .player-challenges-container {
      background: linear-gradient(124deg,#bc13fe,#150a21) !important;
    }

    /* ===== PREMIUM SETTINGS ===== */
    .popup_window:has(#settings),
    .popup_window:has(.settings-panel),
    #settings.popup_window,
    .settings-panel.popup_window,
    #settings,
    .settings-panel {
      background: linear-gradient(145deg,#180a26,#07030d) !important;
      background-color: #0a0512 !important;
      border: 1px solid rgba(188,19,254,.95) !important;
      border-radius: 12px !important;
      box-shadow:
        0 0 0 1px rgba(188,19,254,.18),
        0 0 24px rgba(188,19,254,.28),
        inset 0 1px 0 rgba(255,255,255,.06) !important;
      backdrop-filter: blur(10px) !important;
      -webkit-backdrop-filter: blur(10px) !important;
    }

    #settings,
    #settings *,
    .settings-panel,
    .settings-panel * {
      color: #f8efff !important;
      text-shadow: 0 0 3px rgba(255,255,255,.45) !important;
    }

    #settings h1,
    #settings h2,
    #settings h3,
    #settings legend,
    .settings-panel h1,
    .settings-panel h2,
    .settings-panel h3,
    .settings-panel legend {
      color: #fff !important;
      text-shadow: 0 0 6px rgba(188,19,254,.8),
                   0 0 14px rgba(188,19,254,.38) !important;
    }

    #settings label,
    .settings-panel label,
    #settings .setting,
    .settings-panel .setting,
    #settings .settings-row,
    .settings-panel .settings-row {
      border-radius: 6px !important;
      transition: background-color .16s ease, box-shadow .16s ease !important;
    }

    #settings label:hover,
    .settings-panel label:hover,
    #settings .setting:hover,
    .settings-panel .setting:hover,
    #settings .settings-row:hover,
    .settings-panel .settings-row:hover {
      background: rgba(188,19,254,.10) !important;
      box-shadow: inset 2px 0 0 rgba(188,19,254,.9) !important;
    }

    #settings input[type="checkbox"],
    .settings-panel input[type="checkbox"],
    #settings input[type="range"],
    .settings-panel input[type="range"] {
      accent-color: #bc13fe !important;
      cursor: pointer !important;
    }

    #settings input:not([type="checkbox"]):not([type="range"]),
    #settings select,
    #settings textarea,
    .settings-panel input:not([type="checkbox"]):not([type="range"]),
    .settings-panel select,
    .settings-panel textarea {
      background: linear-gradient(180deg,#160a22,#0a0512) !important;
      color: #fff !important;
      border: 1px solid rgba(188,19,254,.72) !important;
      border-radius: 6px !important;
      outline: none !important;
    }

    #settings input:focus,
    #settings select:focus,
    #settings textarea:focus,
    .settings-panel input:focus,
    .settings-panel select:focus,
    .settings-panel textarea:focus {
      border-color: var(--nsc-cyan) !important;
      box-shadow: 0 0 0 2px rgba(0,240,255,.14),
                  0 0 12px rgba(188,19,254,.28) !important;
    }

    /* ===== BUTTONS ===== */
    body button,
    body .button,
    body .btn {
      background: linear-gradient(135deg,#8d16c9,#4a148c) !important;
      border: 1px solid rgba(243,230,255,.78) !important;
      color: #fff !important;
      border-radius: 6px !important;
      box-shadow: 0 0 10px rgba(188,19,254,.4) !important;
    }

    body button:hover,
    body .button:hover,
    body .btn:hover {
      filter: brightness(1.14) !important;
      box-shadow: 0 0 15px rgba(188,19,254,.8) !important;
    }

    body .ss_button {
      box-shadow: var(--ss-box-shadow-1),
        inset 0 -.2em .2em #150a21,
        inset 0 .25em .35em var(--nsc-purple) !important;
    }

    body .ss_keybind {
      background-color: #1b0d2b !important;
      color: var(--nsc-white) !important;
      border: 1px solid var(--nsc-purple) !important;
    }

    body input,
    body select,
    body textarea {
      border-color: var(--nsc-purple) !important;
      background-color: #0a0512 !important;
      color: #fff !important;
    }

    /* ===== CYAN CROSSHAIR ===== */
    #crosshair,
    .crosshair,
    [id*="crosshair"] {
      background: none !important;
      border: none !important;
      box-shadow: none !important;
    }

    #reticleDot,
    .reticle-dot,
    #crosshair [id*="dot"],
    .crosshair [id*="dot"] {
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      background-color: #00eaff !important;
      box-shadow: 0 0 4px #00eaff, 0 0 9px #168bff !important;
      border-radius: 50% !important;
    }

    #crosshair div:not([id*="dot"]),
    .crosshair div:not([class*="dot"]),
    [id*="crosshair"] div:not([id*="dot"]) {
      background-color: #d8faff !important;
      box-shadow: 0 0 4px #00cfff, 0 0 8px #246bff !important;
      position: absolute !important;
      display: block !important;
      opacity: 1 !important;
    }

    #crosshair [id*="top"] {
      width: 2px !important;
      height: 8px !important;
      left: calc(50% - 1px) !important;
      top: calc(50% - 12px) !important;
      transform: none !important;
    }

    #crosshair [id*="bottom"] {
      width: 2px !important;
      height: 8px !important;
      left: calc(50% - 1px) !important;
      top: calc(50% + 4px) !important;
      transform: none !important;
    }

    #crosshair [id*="left"] {
      width: 8px !important;
      height: 2px !important;
      left: calc(50% - 12px) !important;
      top: calc(50% - 1px) !important;
      transform: none !important;
    }

    #crosshair [id*="right"] {
      width: 8px !important;
      height: 2px !important;
      left: calc(50% + 4px) !important;
      top: calc(50% - 1px) !important;
      transform: none !important;
    }

    /* ===== CHAT ===== */
    #chatOut,
    .chat-container,
    #chatInputForm {
      background: rgba(15,5,25,.78) !important;
      border: 1px solid var(--nsc-purple) !important;
      border-radius: 6px !important;
    }

    .chat-item,
    #chatOut p,
    .ss_chat_msg {
      color: var(--nsc-cyan) !important;
      text-shadow: 0 0 3px rgba(0,240,255,.3) !important;
      font-family: "Courier New", monospace !important;
      font-weight: bold !important;
    }

    #chatInput {
      background: #06020b !important;
      color: #fff !important;
      border-top: 1px solid var(--nsc-purple) !important;
    }

    /* ===== PREMIUM LEADERBOARD ===== */
    #leaderboard,
    .leaderboard,
    [id*="leaderboard"] {
      background: linear-gradient(135deg,rgba(10,5,18,.97),rgba(35,8,52,.94)) !important;
      border: 1px solid var(--nsc-purple) !important;
      border-left: 3px solid var(--nsc-purple) !important;
      border-radius: 8px !important;
      box-shadow: 0 0 8px rgba(188,19,254,.45),
                  0 0 18px rgba(188,19,254,.2) !important;
      padding: 5px !important;
    }

    #leaderboard,
    #leaderboard *,
    .leaderboard,
    .leaderboard *,
    .leaderboard-item,
    .ss_leaderboard_row {
      color: var(--nsc-white) !important;
      font-weight: bold !important;
      text-shadow: 0 0 5px rgba(188,19,254,.4) !important;
    }

    #leaderboard > :first-child,
    .leaderboard > :first-child {
      color: var(--nsc-yellow) !important;
      text-shadow: 0 0 7px var(--nsc-yellow) !important;
    }

    #leaderboard > *:hover,
    .leaderboard > *:hover,
    .leaderboard-item:hover {
      background: rgba(188,19,254,.15) !important;
    }

    #leaderboard .me,
    .leaderboard .me,
    #leaderboard .self,
    .leaderboard .self,
    #leaderboard .you,
    .leaderboard .you,
    .ss_leaderboard_me,
    .leaderboard-item.me,
    #leaderboard [class*="current-player"],
    .leaderboard [class*="current-player"] {
      color: #fff !important;
      text-shadow: 0 0 3px #fff,
                   0 0 8px #bc13fe,
                   0 0 16px #bc13fe !important;
      border-left: 2px solid var(--nsc-cyan) !important;
      background: linear-gradient(90deg,rgba(188,19,254,.35),transparent) !important;
    }

    #leaderboard .me *,
    .leaderboard .me *,
    #leaderboard .self *,
    .leaderboard .self *,
    #leaderboard .you *,
    .leaderboard .you *,
    .ss_leaderboard_me *,
    .leaderboard-item.me * {
      color: #fff !important;
      text-shadow: 0 0 4px #fff,
                   0 0 9px #bc13fe,
                   0 0 16px rgba(188,19,254,.9) !important;
    }

    /* ===== LOADING SCREEN TITLE ===== */
    #progress-container {
      position: relative !important;
      overflow: hidden !important;
      background:
        radial-gradient(ellipse at center,rgba(100,0,150,.22),transparent 70%),
        linear-gradient(145deg,#160a22,#050208) !important;
      border: 2px solid var(--nsc-purple) !important;
      border-radius: 12px !important;
      box-shadow: 0 0 12px rgba(188,19,254,.65),
                  0 0 35px rgba(188,19,254,.28) !important;
    }

    #progress-outer {
      overflow: hidden !important;
      background: #08030d !important;
      border: 1px solid rgba(188,19,254,.65) !important;
      border-radius: 20px !important;
    }

    #progressBar {
      background: linear-gradient(90deg,#590080,#bc13fe,#f3e6ff,#bc13fe) !important;
      background-size: 200% 100% !important;
      border-radius: 20px !important;
      box-shadow: 0 0 8px #bc13fe,
                  0 0 18px rgba(188,19,254,.9) !important;
      animation: nsc-loading-glow 2s linear infinite !important;
    }

    @keyframes nsc-loading-glow {
      from { background-position: 100% 0; }
      to { background-position: -100% 0; }
    }

    #progress-container::after {
      content: "🔥 NSC CLAN 🔥";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 6%;
      text-align: center;
      font: bold 26px "Helvetica Neue",Arial,sans-serif;
      color: var(--nsc-white);
      text-shadow: 0 0 10px rgba(188,19,254,.9);
      letter-spacing: .15em;
      pointer-events: none;
    }

    /* ===== FALLING NSC / GOD / PRO PARTICLES ===== */
    #nsc-special-particles {
      position: fixed;
      inset: 0;
      z-index: 2001;
      overflow: hidden;
      pointer-events: none;
    }

    #nsc-special-particles span {
      position: absolute;
      top: -35px;
      opacity: .85;
      animation: nsc-special-fall linear infinite;
      font-family: Impact,"Arial Black",sans-serif;
      font-weight: bold;
      letter-spacing: 1px;
    }

    @keyframes nsc-special-fall {
      to { transform: translate3d(25px,110vh,0) rotate(15deg); }
    }

    #settings *,
    .settings-panel *,
    #leaderboard,
    .leaderboard {
      scrollbar-color: #7b1fa2 #0a0512;
    }

    @media (prefers-reduced-motion: reduce) {
      #settings *,
      .settings-panel *,
      #progressBar,
      #nsc-special-particles span {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  const addStyle = () => {
    if (document.documentElement &&
        !document.getElementById(STYLE_ID)) {
      document.documentElement.appendChild(css);
    }
  };

  if (document.documentElement) {
    addStyle();
  } else {
    new MutationObserver((_, observer) => {
      if (document.documentElement) {
        observer.disconnect();
        addStyle();
      }
    }).observe(document, { childList: true });
  }

  /* ===== FALLING PARTICLES ===== */
  const startSpecialParticles = () => {
    if (!document.body ||
        document.getElementById("nsc-special-particles")) return;

    const particleBox = document.createElement("div");
    particleBox.id = "nsc-special-particles";

    const words = ["NSC", "GOD", "PRO"];
    const colors = ["#bc13fe", "#f3e6ff", "#d1b3ff"];

    for (let i = 0; i < 21; i++) {
      const p = document.createElement("span");
      p.textContent = words[i % words.length];

      const color = colors[i % colors.length];
      p.style.cssText = `
        left: ${(i * 22) % 100}%;
        font-size: ${15 + (i % 3) * 3}px;
        color: ${color};
        text-shadow: 0 0 8px ${color};
        animation-duration: ${5 + (i % 4) * 1.5}s;
        animation-delay: ${-i * 1.2}s;
      `;

      particleBox.appendChild(p);
    }

    document.body.appendChild(particleBox);

    document.addEventListener("pointerlockchange", () => {
      particleBox.hidden = !!document.pointerLockElement;
    });
  };

  const start = () => {
    startSpecialParticles();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  const bootObserver = new MutationObserver(() => {
    if (document.body &&
        !document.getElementById("nsc-special-particles")) {
      startSpecialParticles();
    }
  });

  bootObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();