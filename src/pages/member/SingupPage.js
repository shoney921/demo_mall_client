import React from "react";
import SignupComponent from "../../components/member/SignupComponent";
import BasicMenu from "../../components/menus/BasicMenu";

export default function SingupPage() {
  return (
    <div className="h-full w-full">
      <BasicMenu />
      <div className="bg-white w-full mt-4 p-2">
        <SignupComponent />
      </div>
    </div>
  );
}
