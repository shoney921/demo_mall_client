import React from "react";
import { useParams } from "react-router";
import ReadComponent from "../../components/qna/ReadComponent";

export default function ReadPage() {
  const { qno } = useParams();

  return (
    <div className="text-1xl w-full">
      <div>Read Page {qno}</div>
      <ReadComponent qno={qno} />
    </div>
  );
}
