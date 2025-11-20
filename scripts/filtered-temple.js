// Temple data array
const temples = [
  {
    templeName: "denver Temple",
    location: "Denver, Colorado",
    dedicated: "1986, April, 27",  
    area: 54000,
    imageUrl:
    "https://www.ldstemple.pics/wp-content/uploads/denver-temple-golden-sunset-300x300.jpg"
 },
  
 {    templeName: "Tokyo Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27", 
    area: 53500,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.wQyvYW25kQPcFd5wVKBeqQHaHZ?pid=ImgDet&w=474&h=473&rs=1&o=7&rm=3"
  },
  
 {
    templeName: "Diego, Temple",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    area: 37000,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.GlIuPwyN4kAhtVoQkemcCQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3"
 },
 {
  templeName: "pocatello Idaho",
  location: "Pocatello, Idaho",
  dedicated: "2021, October, 31",
  area: 17000,
  imageUrl:
  "https://www.ldstemple.pics/wp-content/uploads/indianapolis-temple-to-our-almighty-god-300x300.jpg"
 }, 
  
  {
    templeName: "Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.9vENNyTsMvHPVZxeL4lBzAHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3"
  },
  {
    templeName: "Lima Temple",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.n4Y2ZiZ6ulUFXfXB1UJJVQHaHZ?pid=ImgDet&w=474&h=473&rs=1&o=7&rm=3"
  },
   {
    templeName: "Pheonix Temple",
    location: "Pheonix, Arizona",
    dedicated: "2014, March, 2",  
    area: 38500,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.rKYWdS53-aFxZ2Y6M7RImwHaFC?pid=ImgDet&w=474&h=322&rs=1&o=7&rm=3"
  },
  {
    templeName: "Hong  Temple",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 21000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  },
   
  {
    templeName: "Paris Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Milan Temple",
    location: "Milan, Italy",
    dedicated: "2004-03-21",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  
  {
    templeName: "Palmyra  Temple",
    location: "Palmyra, New York",
    dedicated: "2000-04-06",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio",
    dedicated: "1836-03-27",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
];

// Function to build temple cards
function displayTemples(templesArray) {
  const container = document.getElementById("temples");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");


    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy" 
           width="200" height="150">
    `;

    // Append card to container
    container.appendChild(card);
  });
}

// Call the function
displayTemples(temples);

// ✅ Move event listeners OUTSIDE
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
// Example filter (you can expand this logic)
document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  displayTemples(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 1900);
  displayTemples(newTemples);
});
document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});
document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});
console.log("Temple Album page loaded successfully!");


// Dynamic footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
