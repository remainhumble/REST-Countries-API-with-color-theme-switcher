import "../App.css";
import Header from "../Header";
import Countries from "../Countries";
import Filter from "../Filter";
import SearchBar from "../SearchBar";
import { ThemeProvider } from "../ThemeContext";
import { useState } from "react";
import allCountries from "../../../data.json";

function MainPage() {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const dataRegion = selectedRegion === "America" ? "Americas" : selectedRegion;
  const visibleCountries =
    selectedRegion === "Filter by Region"
      ? allCountries
      : allCountries.filter((country) => country.region === dataRegion);

  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex flex-1 flex-col lg:px-8 lg:py-6 px-4 py-4 dark:bg-blue-950">
            <div className="flex shrink-0 flex-col lg:flex-row justify-between mb-11">
              <SearchBar />
              <Filter
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
              />
            </div>
            <Countries countries={visibleCountries} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
