import React from "react";
import LoginComponent from "../../components/member/LoginComponent";
import BasicMenu from "../../components/menus/BasicMenu";

export default function LoginPage() {
  return (
    <div className="h-full w-full">
      <BasicMenu />
      <LoginComponent />
    </div>
  );
}
