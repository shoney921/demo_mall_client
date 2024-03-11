import React from "react";
import ModifyComponent from "../../components/member/ModifyComponent";
import BasicLayout from "../../layouts/BasicLayout";

export default function ModifyPage() {
  return (
    <BasicLayout>
      <div> Member Modify Page</div>
      <div>
        <ModifyComponent></ModifyComponent>
      </div>
    </BasicLayout>
  );
}
