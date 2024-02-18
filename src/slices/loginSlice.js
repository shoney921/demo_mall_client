import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};

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
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
