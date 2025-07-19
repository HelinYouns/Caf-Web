// Fixing Navbar in Top
window.addEventListener("scroll", function () {
  const wrapper = document.getElementById("navbar-wrapper");
  if (window.scrollY > 20) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
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

// Load Header & Footer
fetch("components/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
  })
  .catch((err) => console.error("Header Load Faild", err));

// Load footer
fetch("components/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

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
