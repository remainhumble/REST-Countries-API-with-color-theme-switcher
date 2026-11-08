import "./App.css";

import Countries from "./Countries";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

import { ThemeProvider } from "./ThemeContext";
import ToggleButton from "./ToggleButton";

function App() {

  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-dvh flex-col">
          <header className="flex justify-between items-center lg:px-8 lg:py-6 px-4 py-4 shadow-md ">
            <h1 className={`text-grey-950 font-extrabold tracking-normal`}>
              Where in the world?
            </h1>
            <ToggleButton />
          </header>

          <main className="flex flex-1 flex-col lg:px-8 lg:py-6 px-4 py-4 ">
            <div className="flex shrink-0 flex-col lg:flex-row justify-between mb-11">
              <SearchBar />

              <Filter />
            </div>
            <Countries />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
