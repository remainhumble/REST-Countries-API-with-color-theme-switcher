import "./App.css";
import allCountries from "../../data.json";
// import Countries from "./Countries";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <header className="flex justify-between items-center lg:px-8 lg:py-6 px-4 py-4 shadow-md dark:bg-grey-950 dark:text-white">
          <h1 className="text-grey-950 font-extrabold tracking-normal">
            Where in the world?
          </h1>
          <button className="flex items-center gap-2 text-grey-950 cursor-pointer font-semibold dark:text-white">
            <svg
              role="img"
              className="moon-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              aria-hidden="true"
            >
              <path d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z" />
            </svg>
            Dark Mode
          </button>
        </header>

        <main className="flex flex-1 flex-col lg:px-8 lg:py-6 px-4 py-4 dark:bg-grey-950 dark:text-white">
          <div className="flex shrink-0 flex-col lg:flex-row justify-between mb-11">
            <SearchBar />
            <Filter />
          </div>
          {/* <Countries /> */}
          {/* Render the matching countries here, outside SearchBar */}
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allCountries.map((country) => (
              <li
                className="bg-white rounded-md overflow-hidden text-grey-950 shadow-md shadow-grey-90 cursor-pointer pb-6"
                key={country.alpha3Code}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={country.flags.svg}
                  alt={`Flag of ${country.name}`}
                />
                <div className="px-4 py-8 flex flex-col justify-center gap-1">
                  <h2 className="font-extrabold pb-4">{country.name}</h2>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>{" "}
                    <span className="font-light">{country.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>{" "}
                    <span className="font-light">{country.capital}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
