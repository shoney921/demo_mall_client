import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";

const initState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("Login............", action);
      console.log(action.payload);
      console.log("------------------");
      return { email: action.payload.email };
    },
    logout: (state, action) => {
      console.log("Logout...........");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled" + action.payload);
        const payload = action.payload;
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending" + action.payload);
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected" + action.payload);
      });
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
