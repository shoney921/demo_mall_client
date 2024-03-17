import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <BasicLayout>
      <div className="text-3xl">
        <div>Main Page</div>
        <div className="text-xl">
          <div>
            템플릿 용으로 만든 페이지 입니다. 메인페이지에 올리고 싶은 내용을
            올리는 공간입니다.
          </div>
        </div>
        <div>
          <Link to={"/about"}>go about</Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
