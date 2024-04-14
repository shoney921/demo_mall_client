import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import mainImg from "../styles/Main Page2.png";
import { API_SERVER_HOST } from "../util/constants";

const MainPage = () => {
  console.log(API_SERVER_HOST);
  return (
    <BasicLayout>
      <img src={mainImg} alt="mainImg" />
      <div className="flex justify-end m-3">
        <Link to={"/about"}>go about</Link>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
