import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import Header from "../Header";
import allCountries from "../../../data.json";

const DetailPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const country = allCountries.find((item) => item.alpha3Code === code);

  if (!country) {
    return (
      <>
        <Header />
        <main className="min-h-dvh px-4 py-8 dark:bg-blue-950 lg:px-8">
          <button
            className="mb-8 cursor-pointer rounded-md px-6 py-2 shadow-md dark:bg-blue-900 dark:text-white"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <p>Country not found.</p>
        </main>
      </>
    );
  }

  const borders = (country.borders ?? [])
    .map((code) => allCountries.find((item) => item.alpha3Code === code))
    .filter((borderCountry) => borderCountry !== undefined);

  return (
    <>
      <Header />
      <main className="min-h-dvh px-4 py-8 dark:bg-blue-950 lg:px-18">
        <button
          className="mb-12 cursor-pointer rounded-md px-6 py-2 shadow-md hover:bg-grey-400 hover:text-white-dark dark:bg-blue-900 dark:text-white"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20">
          <img
            className="w-full max-w-xl object-contain lg:w-1/2"
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
          />
          <div className="w-full">
            <h1 className="mb-6 text-2xl font-extrabold dark:text-white">
              {country.name}
            </h1>
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
              <div className="space-y-2">
                <p className="pb-3">
                  <strong>Native Name: </strong>
                  {country.nativeName || "N/A"}
                </p>
                <p className="pb-3">
                  <strong>Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p className="pb-3">
                  <strong>Region: </strong>
                  {country.region || "N/A"}
                </p>
                <p className="pb-3">
                  <strong>Sub Region: </strong>
                  {country.subregion || "N/A"}
                </p>
                <p className="pb-3">
                  <strong>Capital: </strong>
                  {country.capital || "N/A"}
                </p>
              </div>
              <div className="space-y-2">
                <p className="pb-3">
                  <strong>Top Level Domain: </strong>
                  {country.topLevelDomain?.join(", ") || "N/A"}
                </p>
                <p className="pb-3">
                  <strong>Currencies: </strong>
                  {country.currencies
                    ?.map((currency) => currency.name)
                    .join(", ") || "N/A"}
                </p>
                <p className="pb-3">
                  <strong>Languages: </strong>
                  {country.languages
                    ?.map((language) => language.name)
                    .join(", ") || "N/A"}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <strong>Border Countries:</strong>
              {borders.length > 0 ? (
                borders.map((borderCountry) => (
                  <Link
                    className="rounded px-4 py-1 shadow-md dark:bg-blue-900 dark:text-white"
                    key={borderCountry.alpha3Code}
                    to={`/country/${borderCountry.alpha3Code}`}
                  >
                    {borderCountry.name}
                  </Link>
                ))
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailPage;
