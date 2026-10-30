import { useState } from "react";
import allCountries from "../../data.json";

// NEEDS WORK
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = allCountries.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <div>
      <input
        className="px-4 py-3 w-full md:min-w-auto shadow-md shadow-grey-90 rounded-md"
        type="text"
        placeholder="🔍 Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm.trim() !== "" && (
        <ul>
          {filteredData.map((item) => (
            <li className="px-4 py-3 w-full" key={item.alpha3Code}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
