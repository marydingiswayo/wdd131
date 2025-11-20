// ==============================
// Temple Data Array
// ==============================
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois",
    dedicated: "2002-06-27",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple.jpg"
  },
  {
    templeName: "Palmyra New York Temple",
    location: "Palmyra, New York",
    dedicated: "2000-04-06",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/palmyra-new-york-temple.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio",
    dedicated: "1836-03-27",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple.jpg"
  },
  // ➕ Add at least 3 more temples to meet rubric requirement
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1986-08-24",
    area: 19000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 21000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple.jpg"
  }
];

// ==============================
// DOM References
// ==============================
const container = document.getElementById("temple-cards");

// ==============================
// Display Function
// ==============================
function displayTemples(filteredTemples) {
  container.innerHTML = ""; // Clear previous content
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ==============================
// Filter Functions
// ==============================
document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

// ==============================
// Footer Content
// ==============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("studentName").textContent = "Mary Dingiswayo"; // 👈 Add your name here

// ==============================
// Initial Load
// ==============================
displayTemples(temples);
