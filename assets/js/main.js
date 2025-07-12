// Fixing Navbar in Top
window.addEventListener("scroll", function () {
  const wrapper = document.getElementById("navbar-wrapper");
  if (window.scrollY > 20) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
});

const testimonials = [
  {
    stars: "★★★★★",
    text: "Best coffee in town! Cozy place and amazing atmosphere. Best coffee in town! Cozy place and amazing atmosphere.",
    name: "— Sara M.",
  },
  {
    stars: "★★★★☆",
    text: "Great service and fresh drinks. I loved the Vero Mojito!",
    name: "— Ahmed R.",
  },
  {
    stars: "★★★★★",
    text: "They made my birthday really special. Highly recommended!",
    name: "— Dilan H.",
  },
  {
    stars: "★★★★★",
    text: "The staff is always friendly and the drinks are top-tier.",
    name: "— Rana K.",
  },
];

let currentIndex = 0;
const testimonialDisplay = document.getElementById("testimonialDisplay");

function renderTestimonial(index) {
  const { stars, text, name } = testimonials[index];
  testimonialDisplay.innerHTML = `
      <div class="testimonial-stars">${stars}</div>
      <p>"${text}"</p>
      <h4>${name}</h4>
    `;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});

// Call once to show the first testimonial
renderTestimonial(currentIndex);

//
const menuContainer = document.getElementById("menu-container");

for (const category in menuData) {
  const section = document.createElement("section");
  section.id = category;
  // === Create title container ===
  const titleContainer = document.createElement("div");
  titleContainer.className = "menu-title-container";

  // Add image above title
  const img = document.createElement("img");
  img.src = "assets/icons/ornament-divider.png"; // Replace with your actual image path
  img.alt = `${category} icon`;
  titleContainer.appendChild(img);

  // Add title (h2)
  const title = document.createElement("h2");
  title.textContent = formatTitle(category);
  titleContainer.appendChild(title);

  // Add bottom line (as a styled <div>)
  const line = document.createElement("div");
  line.className = "menu-title-line";
  titleContainer.appendChild(line);

  section.appendChild(titleContainer);

  // === Menu Grid ===
  const grid = document.createElement("div");
  grid.className = "menu";

  menuData[category].forEach((item) => {
    const itemName = document.createElement("div");
    itemName.className = "item-name";
    itemName.innerHTML = `<h4>${item.name}</h4><p>${item.description}</p>`;

    const itemPrice = document.createElement("div");
    itemPrice.className = "item-price";
    itemPrice.textContent = item.price;

    const curency = document.createElement("span");
    curency.className = "price-curency";
    curency.textContent = "IQD";

    itemPrice.appendChild(curency);
    grid.appendChild(itemName);
    grid.appendChild(itemPrice);
  });

  section.appendChild(grid);
  menuContainer.appendChild(section);
}
function formatTitle(key) {
  return key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Menu Category li title in menu page
const items = document.querySelectorAll("#category-list li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove selected class and line from all
    items.forEach((li) => {
      li.classList.remove("selected-category");
      const line = li.querySelector(".selected-line");
      if (line) {
        line.remove();
        li.classList.add("hover-category");
      }
    });

    // Add selected class and create line
    item.classList.add("selected-category");
    const line = document.createElement("span");
    line.classList.add("selected-line");
    item.classList.remove("hover-category");
    item.appendChild(line);

    // Go to category
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
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
// Load header
// Load header into #header
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

// What Our Customer say about us
