import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

export default function ReadComponent({ tno }) {
  const [todo, setTodo] = useState(initState);

  const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div>
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Due Date", todo.dueDate)}
      {makeDiv("complete", todo.complete)}

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
          onClick={() => moveToModify(todo.tno)}
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
