import React, { useEffect, useState } from "react";
import { getList } from "../../api/qnaApi";
import useCustomLogin from "../../hooks/useCustomLogin";
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
  const { exceptionHandle } = useCustomLogin();
  const { page, size, moveToList, refresh, moveToRead } = useCustomMove();

  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size })
      .then((data) => {
        console.log(data);
        setServerData(data);
      })
      .catch((err) => exceptionHandle(err));
  }, [page, size, refresh]);

  return (
    <div>
      {serverData.dtoList.map((qna) => (
        <div
          key={qna.qno}
          className="shadow-md"
          onClick={() => moveToRead(qna.qno)}
        >
          <div className="flex">
            <div className="w-1/12">{qna.qno}</div>
            <div className="w-8/12">{qna.title}</div>
            <div className="w-2/10">{qna.dueDate}</div>
          </div>
        </div>
      ))}
      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
}
