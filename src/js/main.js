const BASE_URL = "https://restcountries.com/v3.1/name/";

async function getCountries(name) {
  const res = await fetch(`${BASE_URL}${name}`);
  const data = await res.json();
  console.log(data);
}

getCountries("chile");
