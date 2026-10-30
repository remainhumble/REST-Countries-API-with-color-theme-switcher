import "./App.css";

const Filter = () => {
// toggle needed


  return (
    <div>
      <button className="flex justify-around items-center min-w-50 text-base cursor-pointer mt-6 mb-2 py-3 w-50 shadow-md shadow-grey-90 rounded-md">
        Filter by Region
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-4 h-4"
        >
          <path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </button>
      <div className="dropdown-content">
        <a href="#" className="rounded-t-md">
          Africa
        </a>
        <a href="#">America</a>
        <a href="#">Asia</a>
        <a href="#">Europe</a>
        <a href="#" className="rounded-b-md">
          Oceania
        </a>
      </div>
    </div>
  );
};

export default Filter;
