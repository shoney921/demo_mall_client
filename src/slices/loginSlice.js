import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");

  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }

  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("Login............", action);
      console.log(action.payload);
      console.log("------------------");

      setCookie("member", JSON.stringify(action.payload), 1);
      return action.payload;
    },
    logout: (state, action) => {
      console.log("Logout...........");
      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled" + action.payload);
        const payload = action.payload;

        if (!payload.error) {
          // 정상 로그인인 경우 쿠기 저장
          setCookie("member", JSON.stringify(payload), 1);
        }

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
