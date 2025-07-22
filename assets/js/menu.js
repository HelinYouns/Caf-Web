let menuData = {};
// DOM elements
const categoryList = document.querySelectorAll("#category-list li");
const menuContainer = document.getElementById("menu-container");
const imageElement = document.getElementById("menu-category-image");

// Category to Image Mapping
const imageMap = {
  "hot-drinks": "assets/images/hot-drink.jpg",
  "cold-drinks": "assets/images/cold-drink.jpg",
  "fresh-drinks": "assets/images/fresh-drink.jpg",
  milkshake: "assets/images/milkshake.jpg",
  mojito: "assets/images/mojito.jpg",
  frappe: "assets/images/frappe.jpg",
  sweets: "assets/images/sweets.jpg",
};

// Format Section Titles (e.g., hot-drinks → Hot Drinks)
function formatTitle(key) {
  return key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Create All Menu Sections
function renderMenu(menuData) {
  for (const category in menuData) {
    const section = document.createElement("section");
    section.id = category;

    // Section Header
    const titleContainer = document.createElement("div");
    titleContainer.className = "menu-title-container";

    const title = document.createElement("h2");
    title.className = "h2-style";
    title.textContent = window.menuTitles?.[category] || formatTitle(category);

    titleContainer.appendChild(title);

    const line = document.createElement("div");
    line.className = "menu-title-line";
    titleContainer.appendChild(line);

    section.appendChild(titleContainer);

    // Section Items Grid
    const grid = document.createElement("div");
    grid.className = "menu";

    menuData[category].forEach(({ name, price, description }) => {
      const itemName = document.createElement("div");
      itemName.className = "item-name ";
      itemName.innerHTML = `<h4 class="caprasimo-regular">${name}</h4><p class="caprasimo-regular">${description}</p>`;

      const itemPrice = document.createElement("div");
      itemPrice.className = "item-price";
      itemPrice.textContent = price;

      const currency = document.createElement("span");
      currency.className = "price-curency";
      currency.textContent = window.translations?.currency || "IQD";

      itemPrice.appendChild(currency);
      grid.appendChild(itemName);
      grid.appendChild(itemPrice);
    });

    section.appendChild(grid);
    menuContainer.appendChild(section);
  }
}

// Scroll to Section and Highlight Active Category
function setupCategoryNavigation() {
  categoryList.forEach((item) => {
    item.addEventListener("click", () => {
      // Reset active styles
      categoryList.forEach((li) => {
        li.classList.remove("selected-category");
        const line = li.querySelector(".selected-line");
        if (line) line.remove();
        li.classList.add("hover-category");
      });

      // Set active
      item.classList.remove("hover-category");
      item.classList.add("selected-category");
      const line = document.createElement("span");
      line.classList.add("selected-line");
      item.appendChild(line);

      // Scroll to section
      const targetId = item.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Dynamic Image Preview on Scroll
function setupImageUpdateOnScroll() {
  window.addEventListener("scroll", () => {
    for (const category in imageMap) {
      const section = document.getElementById(category);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          // Update image
          imageElement.src = imageMap[category];

          // Highlight correct nav category
          categoryList.forEach((li) => {
            const target = li.getAttribute("data-target");
            const line = li.querySelector(".selected-line");
            if (target === category) {
              li.classList.remove("hover-category");
              li.classList.add("selected-category");
              if (!line) {
                const newLine = document.createElement("span");
                newLine.classList.add("selected-line");
                li.appendChild(newLine);
              }
            } else {
              li.classList.remove("selected-category");
              li.classList.add("hover-category");
              if (line) line.remove();
            }
          });

          break; // only one active section at a time
        }
      }
    }
  });
}

// Initialize Menu Page
function initMenuPage() {
  renderMenu(menuData);
  setupCategoryNavigation();
  setupImageUpdateOnScroll();
}
// Menu category
const categoryMenu = document.querySelector(".menu-category");

let isDown = false;
let startX;
let scrollLeft;

categoryMenu.addEventListener("mousedown", (e) => {
  isDown = true;
  categoryMenu.classList.add("dragging");
  startX = e.pageX - categoryMenu.offsetLeft;
  scrollLeft = categoryMenu.scrollLeft;
});

categoryMenu.addEventListener("mouseleave", () => {
  isDown = false;
  categoryMenu.classList.remove("dragging");
});

categoryMenu.addEventListener("mouseup", () => {
  isDown = false;
  categoryMenu.classList.remove("dragging");
});

categoryMenu.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - categoryMenu.offsetLeft;
  const walk = (x - startX) * 1.5; // scroll speed
  categoryMenu.scrollLeft = scrollLeft - walk;
});
