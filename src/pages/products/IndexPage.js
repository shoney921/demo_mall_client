import React from "react";
import { Outlet, useNavigate } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      Products Menus
      <div className="flex m-2 p-2">
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={() => navigate("list")}
        >
          List
        </div>
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={() => navigate("add")}
        >
          Add
        </div>
      </div>
      <div className="flex flex-wrap w-full border-2 border-black">
        <Outlet />
      </div>
    </BasicLayout>
  );
}
