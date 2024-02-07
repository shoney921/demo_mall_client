import React from "react";
import { Outlet } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";

export default function IndexPage() {
  return (
    <BasicLayout>
      <div className="flex m-2 p-2">
        <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
          List
        </div>
        <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
          Add
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <Outlet />
      </div>
    </BasicLayout>
  );
}
