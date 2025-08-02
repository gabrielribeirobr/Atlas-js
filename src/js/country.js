// country.js - Detalhes do país

const code = localStorage.getItem("selectedCountry");
const container = document.getElementById("countryDetails");

fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  .then((res) => res.json())
  .then((data) => {
    const country = data[0];
    container.innerHTML = `
      <div class="card">
        <div class="card-flag">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.svg}" alt="${country.name.common}" />
        </div>
        
        <div class="country-infos">
        <p><strong>Capital:</strong> ${country.capital?.[0] || "Não possui"}</p>
        <p><strong>População:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Região:</strong> ${country.region}</p>
        <p><strong>Idioma:</strong> ${Object.values(
          country.languages || {}
        ).join(", ")}</p>
        <p><strong>Lado da direção do carro:</strong> ${
          country.car.side == "right" ? "Direito" : "Esquerdo"
        }</p>
        <p><strong>Independente:</strong> ${
          country.independent ? "Sim" : "Não"
        }</p>
        <p><strong>Fusos horários:</strong> ${country.timezones}</p>
        <div class="flag-coatOfArms">
        <p><strong>Brasão:</strong> 
  ${
    country.coatOfArms.png
      ? `<img src="${country.coatOfArms.png}" alt="coatOfArms" />`
      : "Não informado"
  }
</p>
        </div>
      </div>
      
      <div class="borders">
      <h2>Fronteiras</h2>
      </div>
      
      <div class="suggestions">
      <h2>Conheça também:</h2>
      </div>
    `;

    if (country.borders?.length) {
  fetch(
    `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`
  )
    .then((res) => res.json())
    .then((borders) => {
      const borderContainer = document.querySelector(".borders");

      if (borders.length === 0) {
        borderContainer.textContent = "Não possui fronteiras";
        return;
      }

      borders.forEach((border) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3>${border.name.common}</h3>
          <img src="${border.flags.svg}" alt="${border.name.common}" />
          
        `;
        div.onclick = () => {
          localStorage.setItem("selectedCountry", border.cca3);
          location.reload();
        };
        borderContainer.appendChild(div);
      });
    })
    .catch((err) => {
      console.error("Erro ao buscar países vizinhos:", err);
      document.querySelector(".borders").textContent = "Erro ao carregar fronteiras.";
    });
} else {
  document.querySelector(".borders").textContent = "Não possui fronteiras";
}

    fetch("https://restcountries.com/v3.1/all?fields=name,flags,region")
      .then((res) => res.json())
      .then((all) => {
        const suggestions = document.querySelector(".suggestions");
        const random = all.sort(() => 0.5 - Math.random()).slice(0, 3);
        random.forEach((s) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
          <h3>${s.name.common}</h3>
          <img src="${s.flags.svg}" alt="${s.name.common}" />`;
          div.onclick = () => {
            localStorage.setItem("selectedCountry", s.cca3);
            location.reload();
          };
          suggestions.appendChild(div);
        });
      });
  });
