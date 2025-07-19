
const menuData = {
  "hot-drinks": [
    {
      name: "Espresso",
      price: "2,000",
      description:
        "Rich, bold, and intense our classic espresso delivers a smooth burst of flavor in every shot.",
    },
    {
      name: "Arabic Coffee",
      price: "2,000",
      description:
        "Light, spiced, and aromatic traditional Arabic coffee brewed with cardamom for a warm, authentic experience.",
    },
    {
      name: "Turkish Coffee",
      price: "2,000",
      description: "Smooth and creamy chocolate delight.",
    },
    {
      name: "Menengiç Coffee",
      price: "2,000",
      description:
        "Made from roasted wild pistachios, caffeine-free, with a nutty, earthy flavor.",
    },
    {
      name: "Americano",
      price: "2,000",
      description:
        "A bold and smooth espresso diluted with hot water for a rich, full-bodied flavor simple, strong, and satisfyingSmooth and creamy chocolate delight.",
    },
    {
      name: "White Americano",
      price: "3,000",
      description:
        "A smooth blend of espresso and hot water, finished with a splash of milk mellowing the boldness without losing the depth",
    },
    {
      name: "Chemex Coffee",
      price: "4,000",
      description:
        "Brewed through a Chemex for a clean, bright flavor and smooth body perfect for those who love a light, refined coffee experience.",
    },
    {
      name: "Hot Chocolate",
      price: "2,000",
      description:
        "Rich, velvety hot chocolate made with creamy milk and real cocoa — a warm, comforting treat for any time of day.",
    },
    {
      name: "Nescafé",
      price: "2,000",
      description:
        "A smooth and classic instant coffee, brewed to perfection. Ideal for a quick, familiar boost with a rich aroma and mild flavor.",
    },
    {
      name: "Cappuccino",
      price: "2,000",
      description: "Bold espresso with steamed milk and thick, velvety foam.",
    },
    {
      name: "Chocolate",
      price: "2,000",
      description: "Rich, creamy hot cocoa with a smooth chocolate flavor.",
    },
    {
      name: "Cocoa",
      price: "2,000",
      description: "Warm, creamy coconut-infused chocolate drink.",
    },
    {
      name: "Salep",
      price: "2,000",
      description:
        "Traditional warm, creamy drink made from orchid root flour, subtly sweet and fragrant.",
    },
    {
      name: "White Coffee",
      price: "2,000",
      description:
        "Smooth, mild coffee with creamy milk for a gentle, comforting flavor.",
    },
    {
      name: "Milk",
      price: "2,000",
      description:
        "Smooth and creamy, the perfect base to complement your coffee or enjoy on its own.",
    },
    {
      name: "Mix Fero",
      price: "2,000",
      description:
        "Smooth and creamy, the perfect base to complement your coffee or enjoy on its own.",
    },
    {
      name: "Nescafé Coffee",
      price: "3,000",
      description:
        "Quick and smooth instant coffee for a fast and delicious caffeine fix.",
    },
    {
      name: "Lotus Hot",
      price: "2,500",
      description:
        "Warm and comforting hot drink infused with the rich, caramelized spice flavors of Lotus Biscoff perfect for cozy moments.",
    },
    {
      name: "Latte",
      price: "2,500",
      description:
        "A smooth and creamy espresso drink blended with steamed milk, topped with a light layer of foam — classic and comforting.",
    },
    {
      name: "Roz Latte",
      price: "2,500",
      description:
        "A delicate rose-flavored latte with creamy steamed milk and a floral hint.",
    },
    {
      name: "Pistachio Latte",
      price: "2,500",
      description:
        "A smooth latte infused with rich, nutty pistachio flavor and creamy milk.",
    },
    {
      name: "Kuku Latte",
      price: "2,500",
      description:
        "A creamy latte blended with a hint of coconut for a lightly sweet, tropical twist.",
    },
    {
      name: "Caramel Latte",
      price: "2,500",
      description:
        "Smooth espresso mixed with steamed milk and sweet caramel syrup.",
    },
    {
      name: "Macchiato",
      price: "2,500",
      description: "Espresso topped with a small amount of milk foam.",
    },
    {
      name: "Hot Chocolate",
      price: "2,000",
      description:
        "Rich, velvety hot chocolate made with creamy milk and real cocoa — a warm, comforting treat for any time of day.",
    },
    {
      name: "Mocha",
      price: "3,000",
      description: "Espresso with chocolate and steamed milk.",
    },
  ],
  "cold-drinks": [
    {
      name: "Caramel Macchiato",
      price: "2,500",
      image: "assets/images/espresso.jpeg",
      description: "Smooth and creamy chocolate delight.",
    },
    {
      name: "Iced Latte",
      price: "3,000",
      image: "assets/images/espresso.jpeg",
      description: "Chilled espresso with milk and ice.",
    },
    {
      name: "Cold Brew",
      price: "3,000",
      image: "assets/images/espresso.jpeg",
      description: "Slow-steeped coffee served cold.",
    },
  ],
  "fresh-drinks": [
    {
      name: "Orange",
      price: "3,000",
      description: "Freshly squeezed, chilled, and full of vitamin C.",
    },
    {
      name: "Lemon",
      price: "3,000",
      description: "Refreshing, tangy, and rich in vitamin C.",
    },
    {
      name: "Carrot",
      price: "3,000",
      description: "Refreshing, tangy, and rich in vitami",
    },
    {
      name: "Green Apple",
      price: "3,000",
      description: "Crisp, tart, and refreshing with a bright, fruity flavor.",
    },
    {
      name: "Orange & Lemon",
      price: "3,000",
      description: "A zesty, refreshing blend of sweet citrus and tangy lemon.",
    },
    {
      name: "Orange & Carrot",
      price: "3,000",
      description:
        "Sweet and vibrant mix with citrusy freshness and natural earthiness.",
    },
    {
      name: "Cocktail",
      price: "3,000",
      description:
        "A refreshing mix of various fresh fruit juices blended for a sweet, tangy flavor.",
    },
    {
      name: "Lemon & Mint",
      price: "3,000",
      description:
        "Cool, tangy, and refreshing with a hint of herbal freshness.",
    },
    {
      name: "Cocktail and Ginger",
      price: "3,000",
      description: "Fruity and spicy blend with a zesty kick of ginger.",
    },
  ],
  milkshake: [
    {
      name: "Vero Milkshake",
      price: "3,000",
      description: "Rich, creamy, and sweet with a smooth vanilla flavor.",
    },
    {
      name: "Lotus Milkshake",
      price: "3,000",
      description:
        "Creamy, sweet blend with the rich caramel flavor of Lotus biscuits.",
    },
    {
      name: "Oreo Milkshake",
      price: "3,000",
      description: "Creamy and chocolatey with crushed Oreo cookies.",
    },

    {
      name: "Banana",
      price: "3,000",
      description: "Smooth, sweet, and naturally creamy.",
    },

    {
      name: "Strawberry",
      price: "3,000",
      description: "Sweet, fruity, and refreshingly creamy.",
    },

    {
      name: "Nutella",
      price: "3,000",
      description: "Rich, creamy, and chocolatey with a smooth hazelnut taste.",
    },

    {
      name: "Pistachio Milkshake",
      price: "3,000",
      description: "Creamy and nutty with a rich pistachio flavor.",
    },
  ],
  mojito: [
    {
      name: "Strawberry Mojito",
      price: "3,000",
      description:
        "Refreshing mint and lime with sweet, juicy strawberry notes.",
    },
    {
      name: "Blue Mojito",
      price: "3,000",
      description:
        "Crisp mint and lime with a cool, tropical twist and vibrant blue color.",
    },
    {
      name: "Coco Mojito",
      price: "3,000",
      description: "Refreshing mint and lime with creamy coconut flavor.",
    },
    {
      name: "Passion Fruit",
      price: "3,000",
      description: "Tangy, sweet, and tropical with a fragrant aroma.",
    },
    {
      name: "Africa Mojito",
      price: "3,000",
      description:
        "Exotic mix of mint, lime, and tropical African fruits for a bold, refreshing twist.",
    },
    {
      name: "Blueberry",
      price: "3,000",
      description:
        "Sweet, slightly tart, and bursting with juicy berry flavor.",
    },
    {
      name: "Lemon and Mint",
      price: "3,000",
      description: "Bright, tangy lemon balanced with cool, fresh mint.",
    },
    {
      name: "Mint",
      price: "3,000",
      description: "Cool, fresh, and invigorating herbal flavor.",
    },
    {
      name: "Watermelon Mojito",
      price: "3,000",
      description:
        "Sweet, juicy watermelon with refreshing mint and zesty lime.",
    },
    {
      name: "Cherry",
      price: "3,000",
      description: "Sweet and tart with a rich, fruity flavor.",
    },
  ],
  frappe: [
    {
      name: "Greek Frappe",
      price: "3,000",
      description:
        "Iced instant coffee, frothy and strong, with a creamy finish.",
    },
    {
      name: "Chocolate",
      price: "3,000",
      description: "Rich, sweet, and creamy with deep cocoa flavor.",
    },
    {
      name: "Cappuccino",
      price: "3,000",
      description: "Espresso with steamed milk and a thick layer of foam.",
    },
    {
      name: "Nescafé",
      price: "3,000",
      description: "Instant coffee with a smooth and quick-brewed flavor.",
    },
    {
      name: "Chocolate",
      price: "3,000",
      description: "Rich, sweet, and creamy with deep cocoa flavor.",
    },
    {
      name: "Cocoa",
      price: "3,000",
      description: "Warm, smooth, and chocolatey with a comforting flavor.",
    },
    {
      name: "Croissant & Chocolate",
      price: "3,000",
      description: "Flaky pastry filled or topped with rich, smooth chocolate.",
    },
    {
      name: "Spicy Frappe",
      price: "3,000",
      description: "hilled coffee with a bold twist of warming spices.",
    },
    {
      name: "Pineapple Frappe",
      price: "3,000",
      description: "Refreshing, tropical, and icy with sweet pineapple flavor.",
    },
  ],
  sweets: [
    {
      name: "Tralitcha",
      price: "2,000",
      description: "Soft, chewy, and rich with caramelized sugar flavor.",
    },
    {
      name: "Chocolate Cake",
      price: "2,000",
      description: "Moist, rich, and intensely chocolatey dessert.",
    },
    {
      name: "Cinnamon Roll",
      price: "2,000",
      description: "Sweet, soft pastry with warm cinnamon and sugary glaze.",
    },
    {
      name: "Fruit Platter",
      price: "3,000",
      description:
        "Colorful mix of fresh, juicy seasonal fruits, sliced and ready to enjoy.",
    },
  ],
};

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
    title.textContent = formatTitle(category);
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
      itemName.className = "item-name";
      itemName.innerHTML = `<h4>${name}</h4><p>${description}</p>`;

      const itemPrice = document.createElement("div");
      itemPrice.className = "item-price";
      itemPrice.textContent = price;

      const currency = document.createElement("span");
      currency.className = "price-curency";
      currency.textContent = "IQD";

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

// Run on page load
initMenuPage();
