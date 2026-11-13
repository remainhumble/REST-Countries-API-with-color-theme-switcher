import { useState } from "react";
import "./App.css";

const Filter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((visible) => !visible);
  };

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <button
        onClick={toggleVisibility}
        aria-expanded={isVisible}
        className="flex justify-between items-center min-w-50 text-base cursor-pointer mt-6 mb-1 px-4 py-3 w-50 shadow-md shadow-grey-90 rounded-md dark:bg-blue-900 dark:text-white"
      >
        {selectedRegion}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={`arrow w-4 h-4 fill-current align-middle transition-transform duration-200 ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </button>
      <div className={`dropdown-content  ${isVisible ? "show" : ""}`}>
        {regions.map((filter, idx) => (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedRegion(filter);
              setIsVisible(false);
            }}
            key={idx}
            className="bg-grey-50 block px-4 py-3 shadow-md shadow-grey-90"
          >
            {filter}
          </a>
        ))}
        {/* <a href="#" className="rounded-t-md">
          Africa
        </a>
        <a href="#">America</a>
        <a href="#">Asia</a>
        <a href="#">Europe</a>
        <a href="#" className="rounded-b-md">
          Oceania
        </a> */}
      </div>
    </div>
  );
};

export default Filter;
