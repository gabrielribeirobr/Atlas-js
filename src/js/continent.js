const continent = localStorage.getItem("selectedContinent");
const container = document.getElementById("continentCountries");
const nameContinent = document.querySelector(".nameContinent");

fetch("https://restcountries.com/v3.1/region/" + continent)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const card = document.createElement("div");
      card.className = `card-country col-sm-6`;
      card.innerHTML = `
        <img src="${country.flags.svg}" class="img-card" alt="${country.name.common}" />
        <h2 class="teste2">${country.name.common}</h2>
      `;
      nameContinent.innerHTML = `${continent.toLocaleUpperCase()}`;
      card.onclick = () => {
        localStorage.setItem("selectedCountry", country.cca3);
        window.location.href = "country.html";
      };
      container.appendChild(card);
    });
  });
