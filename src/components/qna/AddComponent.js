import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { isValidElement, useEffect, useState } from "react";
import { postAdd } from "../../api/qnaApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

export default function AddComponent() {
  const [qna, setQna] = useState({ ...initState });
  const { moveToList } = useCustomMove();

  const addMutation = useMutation({
    mutationFn: (qna) => postAdd(qna),
  });

  const handleChangeQna = (e) => {
    qna[e.target.name] = e.target.value;
    setQna({ ...qna });
  };

  const handleClickAdd = () => {
    addMutation.mutate(qna);
  };

  const queryClinet = useQueryClient();

  const closeModal = () => {
    queryClinet.invalidateQueries("qna/list");
    moveToList({ page: 1 });
  };

  return (
    <div className="text-xl bg-orange-300 mt-10 m-2 p-4">
      {addMutation.isPending && <FetchingModal />}
      {addMutation.isSuccess && (
        <ResultModal
          title={"Add Result"}
          content={`${addMutation.data.result} 추가 완료`}
          callbackFn={closeModal}
        />
      )}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 ">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="title"
            type={"text"}
            value={qna.title}
            onChange={handleChangeQna}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6  ">WRITER</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="writer"
            type={"text"}
            value={qna.writer}
            onChange={handleChangeQna}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6  ">DUEDATE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="dueDate"
            type={"date"}
            value={qna.dueDate}
            onChange={handleChangeQna}
          ></input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
          <button
            type="button"
            onClick={handleClickAdd}
            className="rounded p-4 w-36 border-2 border-black bg-white"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}
