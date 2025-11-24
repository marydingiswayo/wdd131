// Footer year and last modified
 document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // If catalog section exists, populate wines dynamically
  if (document.getElementById("wine-grid")) {
    displayCatalog();
  }

  // If review form exists, set up form handling
  if (document.getElementById("reviewForm")) {
    setupReviewForm();
    displayReviews();
  }
});

  // Catalog data
  const wines = [
  { name: "Cabernet Sauvignon", type: "Red", description: "Rich and full-bodied red wine with bold flavors.", price: "$25.00", image: "images/redwine.jpg" },
  { name: "Chardonnay", type: "White", description: "Crisp and refreshing white wine, perfect for warm days.", price: "$18.00", image: "images/whitewine.jpg" },
  { name: "Prosecco", type: "Sparkling", description: "Light sparkling wine ideal for celebrations.", price: "$22.00", image: "images/sparkling.jpg" },
  { name: "Merlot", type: "Red", description: "Smooth red wine with soft tannins and fruity notes.", price: "$20.00", image: "images/merlot.jpg" },
  { name: "Rosé", type: "Rosé", description: "Delicate pink wine with floral aromas and refreshing taste.", price: "$19.00", image: "images/rose.jpg" }
 ];

 // Function to display catalog dynamically
function displayCatalog() {
  const container = document.getElementById("wine-grid");
  wines.forEach(wine => {
    const card = document.createElement("div");
    card.classList.add("wine-card");
    card.innerHTML = `
      <img src="${wine.image}" alt="${wine.name}" loading="lazy">
      <h3>${wine.name}</h3>
      <p>${wine.description}</p>
      <p class="price">${wine.price}</p>
    `;
    container.appendChild(card);
  });
}

// Review form setup
function setupReviewForm() {
  const form = document.getElementById("reviewForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const wine = document.getElementById("wine").value;
    const review = document.getElementById("reviewText").value;

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, wine, review });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    form.reset();
    displayReviews();
  });
}

// Display reviews
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const container = document.getElementById("reviews");
  if (!container) return;
  container.innerHTML = "";
  reviews.forEach(r => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${r.name}</strong> reviewed <em>${r.wine}</em>: ${r.review}`;
    container.appendChild(div);
  });
}
