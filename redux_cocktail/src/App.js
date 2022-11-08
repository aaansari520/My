import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar_Comp from "./component/Navbar_Comp";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <BrowserRouter>
      <Navbar_Comp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
