import React from "react";
import { toast } from "react-toastify";
import CocktailList from "../component/CocktailList";
import SearchForm from "../component/SearchForm";

const Home = ({ name }) => {
  (function () {
    toast.success("We welcomes you...", {
      position: "top-center",
    });
  })();
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
