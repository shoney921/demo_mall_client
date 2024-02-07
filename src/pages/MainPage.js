import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <BasicLayout>
      <div className={"text-3xl"}>
        <div>Main Page</div>
        <div>
          <Link to={"/about"}>go about</Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
