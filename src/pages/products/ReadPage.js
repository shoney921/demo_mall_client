import React from "react";
import { useParams } from "react-router";
import ReadComponent from "../../components/products/ReadComponent";

export default function ReadPage() {
  const { pno } = useParams();

  return (
    <div>
      ReadPage
      <ReadComponent pno={pno} />
    </div>
  );
}
