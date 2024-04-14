import React from "react";
import { useParams } from "react-router";
import ModifyComponent from "../../components/qna/ModifyComponent";

export default function ModifyPage() {
  const { qno } = useParams();

  return (
    <div className="w-full border-2">
      ModifyPage
      <ModifyComponent qno={qno} />
    </div>
  );
}
