import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

export default function AboutPage() {
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
