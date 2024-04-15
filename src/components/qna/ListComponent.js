import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getList } from "../../api/qnaApi";
import useCustomMove from "../../hooks/useCustomMove";
import { moveToLoginReturn } from "../../hooks/useCustomLogin";
import FetchingModal from "../common/FetchingModal";
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

  const { data, isFetching, error, isError } = useQuery({
    queryKey: ["qna/list", { page, size, refresh }],
    queryFn: () => getList({ page, size }),
    staleTime: 1000 * 60,
  });

  const serverData = data ?? initState;

  // if (isError) {
  //   console.log(error);
  //   return moveToLoginReturn();
  // }

  return (
    <div>
      {isFetching && <FetchingModal />}
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
