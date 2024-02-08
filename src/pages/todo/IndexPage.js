import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";

export default function IndexPage() {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  }, []);

  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  }, []);

  return (
    <BasicLayout>
      <div className="flex m-2 p-2">
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickList}
        >
          List
        </div>
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickAdd}
        >
          Add
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <Outlet />
      </div>
    </BasicLayout>
  );
}
