const continents = [
  {
    name: "africa",
    image: "/public/img/continents/africa.PNG",
    description:
      "A África é o berço da humanidade, rica em culturas, idiomas e biodiversidade, com paisagens que variam de desertos a florestas tropicais.",
  },
  {
    name: "americas",
    image: "/public/img/continents/america-do-sul.PNG",
    description:
      "A América do Sul é um continente localizado principalmente no hemisfério sul, conhecido por sua grande diversidade cultural, climática e natural. Sua principal característica é a vasta biodiversidade, concentrada especialmente na Floresta Amazônica.",
  },
  {
    name: "asia",
    image: "/public/img/continents/asia.PNG",
    description:
      "A Ásia é o maior continente do mundo, tanto em área quanto em população, abrigando culturas milenares e potências tecnológicas modernas.",
  },
  {
    name: "europe",
    image: "/public/img/continents/europe.PNG",
    description:
      "A Europa é conhecida por sua rica história, diversidade cultural e influência global em áreas como arte, ciência e política.",
  },
  {
    name: "oceania",
    image: "/public/img/continents/oceania.PNG",
    description:
      "A Oceania é formada por ilhas e países como Austrália e Nova Zelândia, conhecida por paisagens naturais únicas e culturas indígenas.",
  },
];

const container = document.querySelector(".filters-section");

continents.forEach((continent) => {
  const card = document.createElement("div");
  card.className += `continent-card ${continent.name}`;
  card.innerHTML = `
    <h2>${continent.name}</h2>
    <p class="about-continent">${continent.description}</p>
    <button class="btnRegions" onclick="btnExplore('${continent.name}')">Explorar</button>
  `;
  
  container.appendChild(card);
});

function btnExplore(continentName) {
    localStorage.setItem("selectedContinent", continentName.toLowerCase());
    window.location.href = "continent.html";
};