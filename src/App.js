import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ECommerceMain from "./pages/ECommerceMain";
import SubCategorie from "./pages/SubCategorie";
import Produse from "./pages/Produse";
import Produs from "./pages/Produs";
import Cos from "./pages/Cos";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sub-categorie":
        title = "";
        metaDescription = "";
        break;
      case "/produse":
        title = "";
        metaDescription = "";
        break;
      case "/produs":
        title = "";
        metaDescription = "";
        break;
      case "/cos":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ECommerceMain />} />
      <Route path="/sub-categorie" element={<SubCategorie />} />
      <Route path="/produse" element={<Produse />} />
      <Route path="/produs" element={<Produs />} />
      <Route path="/cos" element={<Cos />} />
    </Routes>
  );
}
export default App;
