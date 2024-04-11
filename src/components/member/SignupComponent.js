import React, { useState } from "react";
import { checkDuplicateNickname, createNewMember } from "../../api/memberApi";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  nickname: "",
};

export default function SignupComponent() {
  const [formData, setFormData] = useState({ ...initState });

  const [errors, setErrors] = useState({});
  const [nicknameError, setNickNameError] = useState(false);
  const { moveToLogin } = useCustomLogin();

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력된 정보 유효성 검사
    const errors = {};
    if (!formData.email.includes("@")) {
      errors.email = "유효한 이메일 주소를 입력하세요.";
    }
    if (formData.password.length < 6) {
      errors.password = "비밀번호는 최소 6자 이상이어야 합니다.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    // if (!formData.phoneNumber.match(/^\d{10,11}$/)) {
    //   errors.phoneNumber = "유효한 휴대폰 번호를 입력하세요.";
    // }
    if (nicknameError) {
      errors.nickname = "닉네임 중복 발생";
    }

    setErrors(errors);

    console.log(errors);
    if (Object.keys(errors).length === 0) {
      // 회원가입 폼 데이터 처리 로직
      console.log("회원가입 폼 데이터:", formData);
      // 여기에 서버에 회원가입 정보 전송하는 로직 추가
      createNewMember(formData).then((result) => {
        moveToLogin();
      });
    }
  };

  const handleClickCheckDup = () => {
    checkDuplicateNickname(formData.nickname).then((result) => {
      console.log(result.result);
      setNickNameError(result.result === "true");
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center text-4xl font-extrabold text-blue-500 mb-8">
        Signup Component
      </div>
      <form onSubmit={handleSubmit}>
        {/* 이메일 입력 필드 */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center w-full max-w-lg">
            <div className="w-1/3 text-right font-bold pr-4">Email:</div>
            <input
              className={`w-2/3 p-3 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } shadow-md`}
              name="email"
              type="id"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* 에러 메시지 표시 */}
        {errors.email && (
          <div className="flex justify-center mb-4 text-red-500">
            {errors.email}
          </div>
        )}
        {/* 패스워드 입력 필드 */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center w-full max-w-lg">
            <div className="w-1/3 text-right font-bold pr-4">Password:</div>
            <input
              className={`w-2/3 p-3 rounded border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } shadow-md`}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* 에러 메시지 표시 */}
        {errors.password && (
          <div className="flex justify-center mb-4 text-red-500">
            {errors.password}
          </div>
        )}
        {/* 패스워드 확인 입력 필드 */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center w-full max-w-lg">
            <div className="w-1/3 text-right font-bold pr-4">
              Confirm Password:
            </div>
            <input
              className={`w-2/3 p-3 rounded border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } shadow-md`}
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* 에러 메시지 표시 */}
        {errors.confirmPassword && (
          <div className="flex justify-center mb-4 text-red-500">
            {errors.confirmPassword}
          </div>
        )}
        {/* 휴대폰번호 입력 필드 */}
        <div className="flex justify-center mb-4">{/* 휴대폰번호 입력 */}</div>
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">Nickname</div>
            <input
              className="w-3/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
              name="nickname"
              type={"text"}
              value={formData.nickname}
              onChange={handleChange}
            ></input>
            <button
              type="button"
              className="w-1/5 rounded p-4 text-xl  text-white bg-blue-500"
              onClick={handleClickCheckDup}
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="text-red-600 pb-3">
          {nicknameError != null && nicknameError ? (
            <div className="flex justify-center">
              <div className="text-red-600">닉네임이 중복됩니다.</div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="text-green-600">사용가능합니다.</div>
            </div>
          )}
        </div>
        {/* 회원가입 버튼 */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
