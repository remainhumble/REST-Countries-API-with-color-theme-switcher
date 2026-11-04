import { useState } from "react";
import allCountries from "../../data.json";
import "./App.css";

// NEEDS WORK
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const prefix = searchTerm.trim().toLowerCase();

  const filteredData = allCountries.filter((country) =>
    country.name.toLowerCase().startsWith(prefix),
  );

  return (
    <div>
      <input
        className="px-4 py-3 w-full lg:w-100 shadow-md shadow-grey-90 rounded-md mt-6 mb-4"
        type="text"
        placeholder="🔍︎      Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.trim() !== "" && (
        <ul className="absolute bg-white rounded-md shadow-md shadow-grey-90 w-full lg:w-100 max-h-60 overflow-y-auto">
          {filteredData.map((item) => (
            <li
              className=" px-4 py-3 cursor-pointer hover:bg-grey-400 dark:hover:bg-grey-700 z-10"
              key={item.alpha3Code}
            >
              {item.name
                .toLowerCase()
                .startsWith(searchTerm.trim().toLowerCase()) ? (
                <span className="font-bold">{item.name}</span>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
