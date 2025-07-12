function changeLanguage(lang) {
  const script = document.createElement("script");
  script.src = `assets/lang/${lang}.js`;
  script.onload = () => {
    updateText(window.translations);
    localStorage.setItem("language", lang); // Save choice
  };
  document.head.appendChild(script);
}

function updateText(translations) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

// Load saved language
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  changeLanguage(savedLang);
});