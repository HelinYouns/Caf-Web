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

      // Update direction
      const root = document.documentElement;
      if (lang === "ar" || lang === "ku") {
        root.setAttribute("dir", "rtl");
        root.classList.add("rtl");
        root.classList.remove("ltr");
      } else {
        root.setAttribute("dir", "ltr");
        root.classList.add("ltr");
        root.classList.remove("rtl");
      }

      // Update language button label
      const langBtnText = document.querySelector(".lang-btn span");
      if (lang === "ku") {
        langBtnText.textContent = "کوردی";
      } else if (lang === "ar") {
        langBtnText.textContent = "عربي";
      } else {
        langBtnText.textContent = "English";
      }
    } else {
      console.error("No translations found in language file.");
    }

    // Hide current language from dropdown
    document.querySelectorAll(".lang-menu a").forEach((link) => {
      const itemLang = link.getAttribute("data-lang");
      link.parentElement.style.display = itemLang === lang ? "none" : "block";
    });

    // 🌟 Call gallery only if on gallery page
    if (window.galleryData && typeof renderGallerySection === "function") {
      renderGallerySection();
    }

    // 🌟 Call menu only if on menu page
    if (window.menuData && typeof initMenuPage === "function") {
      const menuContainer = document.getElementById("menu-container");
      if (menuContainer) menuContainer.innerHTML = "";

      menuData = window.menuData;
      initMenuPage();
    }
  };

  document.head.appendChild(script);
}

function updateText(translations) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key]) {
      // Use innerHTML if the value contains HTML tags
      if (/<[^>]*>/.test(translations[key])) {
        el.innerHTML = translations[key];
      } else {
        el.textContent = translations[key];
      }
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
