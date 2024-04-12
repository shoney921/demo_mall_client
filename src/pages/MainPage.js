import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import mainImg from "../styles/Main Page2.png";

const MainPage = () => {
  return (
    <BasicLayout>
      <img src={mainImg} alt="mainImg" />
      <div>
        <Link to={"/about"}>go about</Link>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
