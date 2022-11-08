import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//We are making ENNUM
export const STATUSES = Object.freeze({
  IDLE: "Everything Is Fine",
  ERROR: "Something Went Wrong",
  LOADING: "We are loading your data, please wait...",
});

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await fetch("http://fakestoreapi.com/products");
    const data = res.json();
    return data;
  }
);

const initialState = {
  data: [],
  status: "",
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  //   reducers: {
  //     setData(state, action) {
  //       state.data = action.payload;
  //     },
  //     setStatus(state, action) {
  //       state.status = action.payload;
  //     },
  //   },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = STATUSES.LOADING;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = STATUSES.ERROR;
    },
  },
});
export const { setData, setStatus } = productSlice.actions;

export default productSlice.reducer;

//THUNKss

// export const fetchProducts = createAsyncThunk(
//   "product/fetchProducts",
//   async () => {
//     const res = await axios("http://fakestoreapi.com/products");
//     const data = res;
//     return data;
//   }
// );
// export function fetchProducts(params) {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("http://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setData(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
