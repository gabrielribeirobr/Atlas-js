// country.js - Detalhes do país

const code = localStorage.getItem('selectedCountry');
const container = document.getElementById('countryDetails');

fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  .then(res => res.json())
  .then(data => {
    const country = data[0];
    container.innerHTML = `
      <div class="card">
        <img src="${country.flags.svg}" alt="${country.name.common}" />
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
      </div>
      <h3>Fronteiras</h3>
      <div class="borders"></div>
      <h3>Sugestões</h3>
      <div class="suggestions"></div>
    `;

    if (country.borders?.length) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
        .then(res => res.json())
        .then(borders => {
          const borderContainer = document.querySelector('.borders');
          borders.forEach(border => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `<img src="${border.flags.svg}" alt="${border.name.common}" /><h2>${border.name.common}</h2>`;
            div.onclick = () => {
              localStorage.setItem('selectedCountry', border.cca3);
              location.reload();
            };
            borderContainer.appendChild(div);
          });
        });
    }

    // Sugestões aleatórias
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(res => res.json())
      .then(all => {
        const suggestions = document.querySelector('.suggestions');
        const random = all.sort(() => 0.5 - Math.random()).slice(0, 3);
        random.forEach(s => {
          const div = document.createElement('div');
          div.className = 'card';
          div.innerHTML = `<img src="${s.flags.svg}" alt="${s.name.common}" /><h2>${s.name.common}</h2>`;
          div.onclick = () => {
            localStorage.setItem('selectedCountry', s.cca3);
            location.reload();
          };
          suggestions.appendChild(div);
        });
      });
  });
