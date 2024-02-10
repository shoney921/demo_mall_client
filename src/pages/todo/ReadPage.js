import React from "react";
import { useParams } from "react-router";
import ReadComponent from "../../components/todo/ReadComponent";

export default function ReadPage() {
  const { tno } = useParams();

  return (
    <div className="text text-3xl">
      <div>Read Page {tno}</div>
      <ReadComponent tno={tno} />
    </div>
  );
}
