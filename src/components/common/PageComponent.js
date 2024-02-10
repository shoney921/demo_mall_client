import React from "react";

export default function PageComponent({ serverData, movePage }) {
  return (
    <div className="flex space-x-1 justify-center mt-8">
      {serverData.prev ? (
        <div onClick={() => movePage({ page: serverData.prevPage })}>prev</div>
      ) : (
        <></>
      )}

      {serverData.pageNumList.map((pageNum) => (
        <div key={pageNum} onClick={() => movePage({ page: pageNum })}>
          {pageNum}
        </div>
      ))}

      {serverData.next ? (
        <div onClick={() => movePage({ page: serverData.nextPage })}>next</div>
      ) : (
        <></>
      )}
    </div>
  );
}
