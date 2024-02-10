import React from "react";
import { useNavigate, useParams } from "react-router";
import ModifyComponent from "../../components/todo/ModifyComponent";

export default function ModifyPage() {
  const { tno } = useParams();

   return (
    <div className="w-full border-2">
      ModifyPage
      <ModifyComponent tno={tno} />
    </div>
  );
}
