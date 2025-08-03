const continents = [
  {
    name: "africa",
    image: "../../public/img/continents/africa.PNG",
    description:
      "A África é o berço da humanidade, rica em culturas, idiomas e biodiversidade, com paisagens que variam de desertos a florestas tropicais.",
  },
  {
    name: "americas",
    image: "../../public/img/continents/america.PNG",
    description:
      "A América é um vasto continente dividido em três partes: América do Norte, Central e do Sul. É marcada por grande diversidade geográfica, cultural e econômica, abrigando florestas tropicais, desertos, cordilheiras e grandes centros urbanos. Da herança indígena aos impactos da colonização europeia, a América é um continente de contrastes e riqueza natural.",
  },
  {
    name: "asia",
    image: "../../public/img/continents/asia.PNG",
    description:
      "A Ásia é o maior continente do mundo, tanto em área quanto em população, abrigando culturas milenares e potências tecnológicas modernas.",
  },
  {
    name: "europe",
    image: "../../public/img/continents/europe.PNG",
    description:
      "A Europa é conhecida por sua rica história, diversidade cultural e influência global em áreas como arte, ciência e política.",
  },
  {
    name: "oceania",
    image: "../../public/img/continents/oceania.PNG",
    description:
      "A Oceania é formada por ilhas e países como Austrália e Nova Zelândia, conhecida por paisagens naturais únicas e culturas indígenas.",
  },
];

const inputName = document.getElementById("textCountry");
const container = document.querySelector(".filters-section");
const iconSearch = document.querySelector(".iconSearch")

continents.forEach((continent) => {
  const card = document.createElement("div");
  card.className += `continent-card ${continent.name}`;
  card.innerHTML = `
    <div>
    <h3>${continent.name}</h2>
    <p class="about-continent">${continent.description}</p>
    </div>
    <button class="btnRegions" onclick="btnExplore('${continent.name}')">Explorar</button>   
    `;
  
  container.appendChild(card);
});

function btnExplore(continentName) {
    localStorage.setItem("selectedContinent", continentName.toLowerCase());
    window.location.href = "continent.html";
};

const continent = localStorage.getItem("selectedContinent");

async function getCountry(name) {
  try{
  const response = await fetch (`https://restcountries.com/v3.1/name/${name}`)
  const data = await response.json();
  console.log(data);
  localStorage.setItem('selectedCountry', data[0].cca3);
  window.location.href = "country.html";
  }
  catch (error){
    alert("País não encontrado.");
  }

}

iconSearch.addEventListener("click", () =>{
  getCountry(`${inputName.value}`);
})