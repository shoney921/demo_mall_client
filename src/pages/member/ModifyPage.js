import React from "react";
import ModifyComponent from "../../components/member/ModifyComponent";
import BasicLayout from "../../layouts/BasicLayout";

export default function ModifyPage() {
  return (
    <BasicLayout>
      <div> 사용할 닉네임을 정해주세요</div>
      <div className="bg-white w-full mt-4 p-2">
        <ModifyComponent></ModifyComponent>
      </div>
    </BasicLayout>
  );
}
