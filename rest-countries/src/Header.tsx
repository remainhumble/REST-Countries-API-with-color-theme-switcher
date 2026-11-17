import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <>
      <header className="flex sticky top-0 bg-grey-50 justify-between items-center lg:px-8 lg:py-6 px-4 py-4 shadow-md dark:bg-blue-900 z-1">
        <h1 className="text-grey-950 font-extrabold tracking-normal  dark:text-white">
          Where in the world?
        </h1>
        <ToggleButton />
      </header>
    </>
  );
};

export default Header;
