function renderGallerySection() {
  const container = document.getElementById("gallery-container");
  if (!container) {
    console.error("No gallery container found!");
    return;
  }

  if (!window.galleryData || !Array.isArray(window.galleryData)) {
    console.error("galleryData is not defined or not an array!");
    return;
  }

  container.innerHTML = "";

  window.galleryData.forEach((row, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "gallery-row";
    const info = document.createElement("div");
    info.className = "gallery-info caprasimo-regular";
    const title = document.createElement("h2");
    title.textContent = row.title;

    const desc = document.createElement("p");
    desc.className = "description-p";
    desc.textContent = row.description;

    info.appendChild(title);
    info.appendChild(desc);

    const grid = document.createElement("div");
    grid.className = "gallery-grid";

    row.images.forEach((src) => {
      const wrapper = document.createElement("div");
      wrapper.className = "gallery-image-wrapper";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Image in Gallery";
      wrapper.appendChild(img);
      grid.appendChild(wrapper);
    });

    // Append based on even or odd index
    if (index % 2 === 0) {
      rowDiv.appendChild(info); // Left
      rowDiv.appendChild(grid); // Right
    } else {
      rowDiv.appendChild(grid); // Left
      rowDiv.appendChild(info); // Right
    }

    container.appendChild(rowDiv);

    const line = document.createElement("span");
    line.className = "line";
    container.appendChild(line);
  });
}
