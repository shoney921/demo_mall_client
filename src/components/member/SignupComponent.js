import React, { useState } from "react";

export default function SignupComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // 에러 메시지 초기화
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
    if (!formData.phoneNumber.match(/^\d{10,11}$/)) {
      errors.phoneNumber = "유효한 휴대폰 번호를 입력하세요.";
    }
    if (formData.name.trim() === "") {
      errors.name = "이름을 입력하세요.";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // 회원가입 폼 데이터 처리 로직
      console.log("회원가입 폼 데이터:", formData);
      // 여기에 서버에 회원가입 정보 전송하는 로직 추가
    }
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
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* 에러 메시지 표시 */}
          {errors.email && (
            <div className="w-2/3 ml-1 text-red-500">{errors.email}</div>
          )}
        </div>
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
        {/* 이름 입력 필드 */}
        <div className="flex justify-center mb-4">{/* 이름 입력 */}</div>
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
