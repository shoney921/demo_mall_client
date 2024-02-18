import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: () => {
      console.log("Login............");
    },
    logout: () => {
      console.log("Logout...........");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
