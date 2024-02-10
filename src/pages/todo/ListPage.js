import React from "react";
import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

export default function ListPage() {
  return (
    <div className="p-4 w-full bg-orange-200 ">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>
      <ListComponent />
    </div>
  );
}
