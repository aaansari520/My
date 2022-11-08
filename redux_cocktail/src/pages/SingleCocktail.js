import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log("SingleCocktail-data", data);
        if (data.drinks) {
          setLoading(false);
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktails = {
            name,
            image,
            info,
            glass,
            category,
            instructions,
            ingredients,
          };
          setCocktail(newCocktails);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    getCocktails();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktail to Display</h2>;
  }

  const { name, image, info, glass, category, instructions, ingredients } =
    cocktail;
  console.log("SingleCocktail", cocktail);
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : {name}</span>
          </p>
          <p>
            <span className="drink-data"> glass: {glass}</span>
          </p>
          <p>
            <span className="drink-data">category : {category}</span>
          </p>
          <p>
            <span className="drink-data">info : {info}</span>
          </p>
          <p>
            <span className="drink-data">instructions : {instructions}</span>
          </p>
          <p>
            <span className="drink-data">ingredients : </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
