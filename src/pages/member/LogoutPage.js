import React from "react";
import LogoutComponent from "../../components/member/LogoutComponent";
import BasicMenu from "../../components/menus/BasicMenu";

export default function LogoutPage() {
  return (
    <div className="h-full w-full">
      <BasicMenu />
      <LogoutComponent />
    </div>
  );
}
