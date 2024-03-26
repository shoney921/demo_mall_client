import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { login, loginPostAsync } from "../../slices/loginSlice";
import KaKaoLoginComponent from "./KaKaoLoginComponent";

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    // 1번째 방식
    // dispatch(login(loginParam));

    // 2번째 방식
    // dispatch(loginPostAsync(loginParam))
    //   .unwrap() //비동기를 동기처럼 받아서 쓸수있음
    //   .then((data) => {
    //     if (data.error) {
    //       alert("이메일과 패스워드를 확인해 주세요");
    //     } else {
    //       alert("로그인 성공");
    //       navigate({ pathname: "/" }, { replace: true }); // 리플레이스 해줘야지 뒤로가기 안먹힘
    //     }
    //   });

    // 3번째 방식
    doLogin(loginParam).then((data) => {
      if (data.error) {
        alert("이메일과 비밀번호를 확인해주세요");
      } else {
        alert("로그인 성공");
        moveToPath("/");
      }
    });
  };

  const handleClickSignup = () => {
    moveToPath("/member/signup");
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center text-4xl font-extrabold text-blue-500 mb-8">
        Login
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex items-center w-full max-w-lg">
          <div className="w-1/3 text-right font-bold pr-4">Email:</div>
          <input
            className="w-2/3 p-3 rounded border border-solid border-gray-300 shadow-md"
            name="email"
            type="text"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex items-center w-full max-w-lg">
          <div className="w-1/3 text-right font-bold pr-4">Password:</div>
          <input
            className="w-2/3 p-3 rounded border border-solid border-gray-300 shadow-md"
            name="pw"
            type="password"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <div className="flex items-center w-full max-w-lg">
          <div className="mr-10">
            <Link
              className="text-blue-500 hover:underline"
              onClick={handleClickSignup}
            >
              회원가입
            </Link>
          </div>
          <button
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow-md hover:bg-blue-600 transition-colors duration-300"
            onClick={handleClickLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
      <KaKaoLoginComponent />
    </div>
  );
}
