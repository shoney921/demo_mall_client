import React from "react";
import { useParams } from "react-router";
import ModifyComponent from "../../components/products/ModifyComponent";

export default function ModifyPage() {
  const { pno } = useParams();
  return (
    <div>
      Modify Page
      <ModifyComponent pno={pno} />
    </div>
  );
}
