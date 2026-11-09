import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        aria-pressed="false"
        className="flex items-center gap-2 text-grey-950 cursor-pointer font-semibold dark:text-white"
        onClick={toggleTheme}
      >
        <svg
          role="img"
          className="moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          aria-hidden="true"
        >
          <path d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z" />
        </svg>
        <svg
          role="img"
          className="dark-moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z" />
        </svg>
        Dark Mode
      </button>
    </div>
  );
};

export default ToggleButton;
