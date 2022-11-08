import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  post: [],
  isLoading: false,
};

export const getPost = createAsyncThunk(
  "post/postSlice",
  async ({ id }, thunkAPI) => {
    try {
      const resp = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("response", resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deletePost = createAsyncThunk(
  "delete/deletePost",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("response", resp);
      //   thunkAPI.dispatch(getPost());
      return resp.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.post = [payload];
      toast.success("Yup! there is your data");
    },
    [getPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      toast.success("Yup! your post is deleted Successfully");
    },
    [deletePost.rejected]: (state) => {
      state.isLoading = false;
      toast.success("Sorry you are not able to delete this post");
    },
  },
});
// const data = getPost();
// console.log("data", data);
export default postSlice.reducer;
