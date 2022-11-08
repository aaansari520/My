import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./slice/CocktailsSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});
