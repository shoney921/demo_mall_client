import React from "react";
import useCustomLogin from "../../hooks/useCustomLogin";

export default function CartComponent() {
  const { isLogin, loginState } = useCustomLogin();
  return (
    <div className="w-full">
      {isLogin ? (
        <div>
          test
          <div>{loginState.nickname}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div> Cart </div>
    </div>
  );
}
