import React, { useEffect } from "react";
import { getList } from "../../api/productsApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import PageComponent from "../common/PageComponent";
import useCustomLogin from "../../hooks/useCustomLogin";
import { API_SERVER_HOST, QUERY_KEYS } from "../../util/constants";
import { useQuery } from "@tanstack/react-query";

const host = API_SERVER_HOST;

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
  const { moveToList, moveToRead, page, size } = useCustomMove();

  const { data, isFetching, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCTS_LIST, { page, size }],
    queryFn: () => getList({ page, size }),
    staleTime: 1000,
  });
  const serverData = data ?? initState;

  useEffect(() => {
    if (isError) {
      exceptionHandle(error);
    }
  }, [isError]);

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      {isFetching && <FetchingModal />}
      <div className="flex flex-wrap mx-auto p-6">
        {serverData.dtoList.map((product) => (
          <div
            key={product.pno}
            className="w-1/2 p-1 rounded shadow-md border-2"
            onClick={() => moveToRead(product.pno)}
          >
            <div className="flex flex-col h-full">
              <div className="font-extrabold text-2xl p-2 w-full ">
                {product.pno}
              </div>
              <div className="text-1xl m-1 p-2 w-full flex flex-col">
                <div className="w-full overflow-hidden ">
                  <img
                    alt="product"
                    className="m-auto rounded-md w-30"
                    src={`${host}/api/products/view/s_${product.uploadedFileNames[0]}`}
                  />
                </div>
                <div className="bottom-0 font-extrabold bg-white">
                  <div className="text-center p-1">이름: {product.pname}</div>
                  <div className="text-center p-1">가격: {product.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
}