// Product array
const products = [
  { id: "p1", name: "Solar Lantern" },
  { id: "p2", name: "Water Purifier" },
  { id: "p3", name: "Portable Stove" },
  { id: "p4", name: "Rechargeable Fan" }
];

// Populate select options
const selectElement = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
// Dynamic footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;