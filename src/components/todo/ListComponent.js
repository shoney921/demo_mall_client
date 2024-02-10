import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageReqDto: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

export default function ListComponent() {
  const { page, size, moveToList, refresh, moveToRead } = useCustomMove();

  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh]);

  return (
    <div>
      {serverData.dtoList.map((todo) => (
        <div
          key={todo.tno}
          className="shadow-md"
          onClick={() => moveToRead(todo.tno)}
        >
          <div className="flex">
            <div className="w-1/12">{todo.tno}</div>
            <div className="w-8/12">{todo.title}</div>
            <div className="w-2/10">{todo.dueDate}</div>
          </div>
        </div>
      ))}
      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
}
