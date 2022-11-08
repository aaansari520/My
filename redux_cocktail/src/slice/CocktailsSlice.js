import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const getCocktails = createAsyncThunk(
  "cocktail/getCocktails",
  async (search) => {
    return fetch(`${url}${search}`).then((res) => res.json());
  }
);
const initialState = {
  cocktails: [],
  searchTerm: "a",
  loading: false,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  extraReducers: {
    [getCocktails.pending]: (state) => {
      state.loading = true;
    },
    [getCocktails.fulfilled]: (state, action) => {
      // console.log(action);
      state.loading = false;
      state.cocktails = action.payload;
      state.search = action.payload;
    },
    [getCocktails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

console.log("cocktailSlice", cocktailSlice);

export default cocktailSlice.reducer;
