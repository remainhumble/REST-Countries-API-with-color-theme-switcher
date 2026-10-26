import allCountries from "../../data.json";

const Countries = () => (
  <ul>
    {allCountries.map((country) => (
      <li key={country.alpha3Code}>
        <img src={country.flags.svg} alt={`Flag of ${country.name}`} />
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
      </li>
    ))}
  </ul>
);

export default Countries;
