import { useState, useEffect } from "react";
// import Countries from "./Countries";

// NEEDS WORK
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((item) => console.log(item));

  return (
    <div>
      <input
        className="px-4 py-3 w-full md:w-auto shadow-md shadow-grey-90 rounded-md"
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <Countries /> */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
