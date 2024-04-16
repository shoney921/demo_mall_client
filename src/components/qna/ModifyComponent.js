import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/qnaApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";
import FetchingModal from "../common/FetchingModal";

const initState = {
  qno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

export default function ModifyComponent({ qno }) {
  const [qna, setQna] = useState(initState);

  const [result, setResult] = useState(null);

  const { moveToRead, moveToList } = useCustomMove();

  const delMutation = useMutation({
    mutationFn: (qno) => deleteOne(qno),
  });

  const modMutation = useMutation({
    mutationFn: (qna) => putOne(qna),
  });

  const query = useQuery({
    queryKey: ["qna", qno],
    queryFn: () => getOne(qno),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setQna(query.data);
    }
  }, [qno, query.data, query.isSuccess]);

  const handleChangeQna = (e) => {
    console.log(e.target);
    qna[e.target.name] = e.target.value;
    setQna({ ...qna });
  };

  const handleChangeQnaComplete = (e) => {
    const value = e.target.value;
    qna.complete = value === "Y";
    setQna({ ...qna });
  };

  const handleClickDelete = () => {
    delMutation.mutate(qno);
  };

  const handleClickModify = () => {
    modMutation.mutate(qna);
  };

  const queryClient = useQueryClient();

  const closeModal = () => {
    queryClient.invalidateQueries(["qna"], qno);
    queryClient.invalidateQueries("qna/list");
    if (delMutation.isSuccess) {
      moveToList();
    }
    if (modMutation.isSuccess) {
      moveToRead(qno);
    }
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {(query.isFetching || delMutation.isPending || modMutation.isPending) && (
        <FetchingModal />
      )}
      {(delMutation.isSuccess || modMutation.isSuccess) && (
        <ResultModal
          title={"처리결과"}
          content="정상처리 완료"
          callbackFn={closeModal}
        />
      )}
      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TNO</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
            {qna.qno}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
            {qna.writer}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="title"
            type={"text"}
            value={qna.title}
            onChange={handleChangeQna}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="dueDate"
            type={"date"}
            value={qna.dueDate}
            onChange={handleChangeQna}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">COMPLETE</div>
          <select
            name="status"
            className="border-solid border-2 rounded m-1 p-2"
            onChange={handleChangeQnaComplete}
            value={qna.complete ? "Y" : "N"}
          >
            <option value="Y">Completed</option>
            <option value="N">Not Yet</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={handleClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={handleClickModify}
        >
          Modify
        </button>
      </div>
    </div>
  );
}
