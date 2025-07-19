function changeLanguage(lang) {
  // Remove old script
  const oldScript = document.querySelector("script[data-lang]");
  if (oldScript) oldScript.remove();

  // Create and load new script
  const script = document.createElement("script");
  script.src = `assets/lang/${lang}.js`;
  script.setAttribute("data-lang", lang);
  script.onload = () => {
    if (window.translations) {
      updateText(window.translations);
      localStorage.setItem("language", lang);

      // Optional: update button label manually
      const langBtn = document.querySelector(".lang-btn");
      langBtn.textContent =
        lang === "ku"
          ? "کوردی "
          : lang === "ar"
          ? "عربي "
          : "en"
          ? "English "
          : "English ";
    } else {
      console.error("No translations found in language file.");
    }
  };
  document.head.appendChild(script);
}

function updateText(translations) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

// Attach click event to language links
document.addEventListener("DOMContentLoaded", () => {
  // Load saved language
  const savedLang = localStorage.getItem("language") || "en";
  changeLanguage(savedLang);

  // Language menu click
  document.querySelectorAll(".lang-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = link.getAttribute("data-lang");
      changeLanguage(selectedLang);
    });
  });
});
