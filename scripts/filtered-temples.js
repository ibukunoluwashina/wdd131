const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Bangkok City Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
  },
  {
    templeName: "Oslo Norway",
    location: "Oslo, Norway",
    dedicated: "2024, January, 14",
    area: 10800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/oslo-norway-temple/oslo-norway-temple-36303-main.jpg",
  },
  {
    templeName: "Bengaluru India",
    location: "Bengaluru India",
    dedicated: "2025, December, 2",
    area: 38670,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg",
  },
];

// Render all temples at first
// Initial render (Home)
createTempleCards(temples);


const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// Helper function to get the year from temple.dedicated string
function getDedicatedYear(dedicatedDate) {
  // Extract the first 4 digits (year)
  const match = dedicatedDate.match(/\d{4}/);
  return match ? parseInt(match[0]) : null;
}

// Navigation event listeners
homeLink.addEventListener("click", () => {
  createTempleCards(temples); // show all
});

oldLink.addEventListener("click", () => {
  const oldTemples = temples.filter(
    (temple) => getDedicatedYear(temple.dedicated) < 1900
  );
  createTempleCards(oldTemples);
});

newLink.addEventListener("click", () => {
  const newTemples = temples.filter(
    (temple) => getDedicatedYear(temple.dedicated) > 2000
  );
  createTempleCards(newTemples);
});

largeLink.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCards(largeTemples);
});

smallLink.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCards(smallTemples);
});

// Reusable rendering function
function createTempleCards(list) {
  const container = document.querySelector("#temples");
  container.innerHTML = ""; // Clear previous cards

  list.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq. ft.`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}


