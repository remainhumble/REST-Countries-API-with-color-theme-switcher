import allCountries from "../../data.json";

const Countries = () => (
  <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {allCountries.map((country) => (
      <li
        className="rounded-md overflow-hidden text-grey-950 shadow-md shadow-grey-90 cursor-pointer"
        key={country.alpha3Code}
      >
        <img
          className="w-full h-48 object-cover"
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
        />
        <div className="px-4 py-4 flex flex-col justify-center">
          <h2 className="font-extrabold mb-2">
            {country.name}
          </h2>
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{country.population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>{" "}
            <span className="font-light">{country.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital :</span>{" "}
            <span className="font-light">{country.capital}</span>
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export default Countries;
