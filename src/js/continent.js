const continent = localStorage.getItem('selectedContinent');
const container = document.getElementById('continentCountries');

fetch('https://restcountries.com/v3.1/region/' + continent)
  .then(res => res.json())
  .then(data => {

    data.forEach(country => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common}" />
        <h2>${country.name.common}</h2>
      `;
      card.onclick = () => {
        localStorage.setItem('selectedCountry', country.cca3);
        window.location.href = 'country.html';
      };
      container.appendChild(card);
    });
  });

  