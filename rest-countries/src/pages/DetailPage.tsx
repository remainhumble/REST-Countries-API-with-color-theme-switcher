import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import "../App.css";
import Header from "../Header";

const DetailPage = () => {
  const { alpha3Code } = useParams(); // Extract the alpha3Code parameter from the URL
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="p-16">
        <button
          className="cursor-pointer shadow-[5px_0_5px_-2px_var(--color-grey-400),-5px_0_5px_-2px_var(--color-grey-400),0_5px_5px_-2px_var(--color-grey-400),0_-5px_5px_-2px_var(--color-grey-400)] rounded-md w-25 h-11 hover:bg-grey-400 hover:text-white-dark"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </main>
    </>
  );
};

export default DetailPage;
