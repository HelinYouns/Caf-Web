// Fixing Navbar in Top
window.addEventListener("scroll", function () {
  const wrapper = document.getElementById("navbar-wrapper");
  if (window.scrollY > 20) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
});
// Contact Icons Action.
// Contact Section
document.querySelectorAll(".icon-hover").forEach((el) => {
  const img = el.querySelector("img");
  const defaultSrc = `assets/icons/${el.dataset.default}`;
  const hoverSrc = `assets/icons/${el.dataset.hover}`;

  el.addEventListener("mouseover", () => {
    img.src = hoverSrc;
  });
  el.addEventListener("mouseout", () => {
    img.src = defaultSrc;
  });
});

// Burger icon in header
document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("nav-icon3");
  const navLinks = document.querySelector(".nav-links");

  // Toggle nav open/close on burger icon click
  burgerIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent it from bubbling to document
    burgerIcon.classList.toggle("open");
    navLinks.classList.toggle("active");
  });

  // Prevent clicks inside nav from closing it
  navLinks.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Close nav when clicking outside
  document.addEventListener("click", function () {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      burgerIcon.classList.remove("open");
    }
  });
});

// For Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const OFFSET = 100;

window.scrollTo({
  top: targetElement.offsetTop - OFFSET,
  behavior: "smooth",
});

// Actions
// See Menu Button
function goToMenu() {
  window.location.href = "menu.html";
}
function goToHome() {
  window.location.href = "index.html";
}
function goToGallery() {
  window.location.href = "gallery.html";
}
function goToWhatsApp() {
  window.open(
    "https://wa.me/9647508687789?text=Hello%2C%20I%20want%20to%20ask%20about%20your%20services",
    "_blank"
  );
}
