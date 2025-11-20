// Temple data array
const temples = [
  {
  templeName: "pocatello Idaho",
  location: "Pocatello, Idaho",
  dedicated: "2021, October, 31",
  area: 17000,
  imageUrl:
  "https://thumbs.dreamstime.com/b/pocatello-idaho-temple-lds-mormon-church-jesus-christ-religion-sacred-pocatello-idaho-lds-temple-building-mormon-church-248474906.jpg"
 }, 
 {    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27", 
    area: 53500,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.wQyvYW25kQPcFd5wVKBeqQHaHZ?pid=ImgDet&w=474&h=473&rs=1&o=7&rm=3"
  },
  
 {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    area: 37000,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.GlIuPwyN4kAhtVoQkemcCQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3"
 },
 {
    templeName: "denver Colorado",
    location: "Denver, Colorado",
    dedicated: "1986, April, 27",  
    area: 54000,
    imageUrl:
    "https://www.ldstemple.pics/wp-content/uploads/denver-temple-golden-sunset-300x300.jpg"
 },
  {
    templeName: "Pheonix Arizona",
    location: "Pheonix, Arizona",
    dedicated: "2014, March, 2",  
    area: 38500,
    imageUrl:
    "https://img1.etsystatic.com/193/0/9513477/il_340x270.1462740425_env2.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1986-08-24",
    area: 19000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 21000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  },
  {
    templeName: "Palmyra New York Temple",
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

// Dynamic footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
