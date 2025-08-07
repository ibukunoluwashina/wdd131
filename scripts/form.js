const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");
  const infoContainer = document.getElementById("product-info");

  // Populate dropdown
  if (select) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });

    // Display average rating when a product is selected
    select.addEventListener("change", (e) => {
      const selectedProduct = products.find((p) => p.id === e.target.value);
      if (selectedProduct) {
        infoContainer.innerHTML = `<p><strong>Average Rating:</strong> ${selectedProduct.averagerating}</p>`;
      } else {
        infoContainer.innerHTML = "";
      }
    });
  }

  // Show review count on review.html
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const counterDisplay = document.createElement("p");
    counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    document.body.appendChild(counterDisplay);
  }
});
