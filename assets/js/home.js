// Animate each category card on scroll
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document
  .querySelectorAll(".category-card")
  .forEach((card) => observer.observe(card));

const testimonials = [
  {
    text: "I like Your Cafe. Best coffee in town! Cozy place and great vibes.",
    author: "Helin",
  },
  {
    text: "Amazing ambiance, the coffee and cake were perfect!",
    author: "Sara",
  },
  {
    text: "Super friendly staff and relaxing atmosphere.",
    author: "Ali",
  },
  {
    text: "The cakes are amazing!",
    author: "Lara",
  },
  {
    text: "Perfect place for studying and catching up with friends.",
    author: "Omar",
  },
];

const carousel = document.getElementById("carousel");

// Create and append cards
testimonials.forEach(({ text, author }) => {
  const card = document.createElement("div");
  card.className = "testimonial-card";
  card.innerHTML = `
    <p class="testimonial-text">${text}</p>
    <p class="testimonial-author">${author}</p>
  `;
  carousel.appendChild(card);
});

// Scroll Interaction
let isDragging = false,
  startX,
  scrollLeft;

const startDrag = (e) => {
  isDragging = true;
  carousel.style.cursor = "grabbing";
  startX = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
};

const endDrag = () => {
  isDragging = false;
  carousel.style.cursor = "grab";
};

const drag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
};

// Event listeners
carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("touchstart", startDrag);
carousel.addEventListener("mouseup", endDrag);
carousel.addEventListener("touchend", endDrag);
carousel.addEventListener("mouseleave", endDrag);
carousel.addEventListener("mousemove", drag);
carousel.addEventListener("touchmove", drag);

