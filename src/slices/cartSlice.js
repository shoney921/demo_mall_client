import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartItems } from "../api/cartApi";

export const getCartItemsAsync = createAsyncThunk("getCartItemsAsync", () => {
  return getCartItems();
});

export const postChangeCartAcync = createAsyncThunk(
  "postChangeCartAcync",
  (param) => {
    return postChangeCartAcync(param);
  }
);

const initState = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsAsync.fulfilled, (state, action) => {
        console.log("getCartItemsAsync.fulfilled");
        console.log(action.payload);
        return action.payload; // action.payload 에 데이터가 들어가 있다.
      })
      .addCase(postChangeCartAcync.fulfilled, (state, action) => {
        console.log("postChangeCartAcync.fulfilled");
        console.log(action.payload);
        return action.payload;
      });
  },
});

export default cartSlice.reducer;
