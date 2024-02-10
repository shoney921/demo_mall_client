import React, { useEffect, useState } from "react";
import { postAdd } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });

  const [result, setResult] = useState(null);

  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    console.log(e.target);
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  const handleClickAdd = () => {
    postAdd(todo).then((data) => {
      setResult(data.tno);
    });
  };

  const closeModal = () => {
    setTodo({ ...initState });
    setResult(null);
    moveToList({ page: 1 });
  };

  return (
    <div className="text-xl bg-orange-300 mt-10 m-2 p-4">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 ">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="title"
            type={"text"}
            value={todo.title}
            onChange={handleChangeTodo}
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
            value={todo.writer}
            onChange={handleChangeTodo}
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
            value={todo.dueDate}
            onChange={handleChangeTodo}
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
      {result ? (
        <ResultModal
          title={"Add Result"}
          content={`${result} 추가 완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
