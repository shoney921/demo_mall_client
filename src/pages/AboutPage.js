import React from "react";
import { Link } from "react-router-dom";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";

export default function AboutPage() {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  if (!isLogin) {
    return moveToLoginReturn();
  }
  return (
    <BasicLayout>
      <div className={"text-3xl"}>
        AboutPage
        <div>
          <Link to="/"> main </Link>
        </div>
      </div>
    </BasicLayout>
  );
}
