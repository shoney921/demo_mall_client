import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getOne } from "../../api/qnaApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const initState = {
  qno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

export default function ReadComponent({ qno }) {
  const { moveToList, moveToModify } = useCustomMove();

  const { data, isFetching } = useQuery({
    queryKey: ["qna", qno],
    queryFn: () => getOne(qno),
    staleTime: 1000 * 60,
  });

  const qna = data ?? initState;

  return (
    <div className="w-full border-2">
      {isFetching && <FetchingModal />}

      {makeDiv("Tno", qna.qno)}
      {makeDiv("Title", qna.title)}
      {makeDiv("Writer", qna.writer)}
      {makeDiv("Due Date", qna.dueDate)}
      {makeDiv("complete", qna.complete)}

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded p-4 m-2 w-32 bg-blue-500"
          onClick={() => moveToList()}
          g
        >
          List
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 w-32 bg-red-500"
          onClick={() => moveToModify(qna.qno)}
        >
          Modify
        </button>
      </div>
    </div>
  );
}

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);
