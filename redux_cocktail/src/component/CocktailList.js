import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../slice/CocktailsSlice";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((store) => store.cocktail);

  const { drinks } = cocktails;

  const data = drinks?.map((item) => {
    const { strAlcoholic, strDrink, strGlass, strDrinkThumb, idDrink } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  useEffect(() => {
    getCocktails();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (drinks === null) {
    return (
      <div className="flex">
        <h4 className="flex1">Sorry, No Cocktails Matched</h4>
      </div>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {data?.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
