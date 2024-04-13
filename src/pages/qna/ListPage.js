import React from "react";
import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/qna/ListComponent";

export default function ListPage() {
  return (
    <div className="p-4 w-full bg-blue-200 ">
      <div className="text-3xl font-extrabold">QnA List</div>
      <ListComponent />
    </div>
  );
}
