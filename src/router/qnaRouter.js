import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router";

const Loading = <div>Loading....</div>;
const QnaList = lazy(() => import("../pages/qna/ListPage"));
const QnaRead = lazy(() => import("../pages/qna/ReadPage"));
const QnaAdd = lazy(() => import("../pages/qna/AddPage"));
const QnaModify = lazy(() => import("../pages/qna/ModifyPage"));

export default function qnaRouter() {
  return [
    {
      path: "",
      element: <Navigate replace to={"list"} />,
    },
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <QnaList />
        </Suspense>
      ),
    },
    {
      path: "read/:qno",
      element: (
        <Suspense fallback={Loading}>
          <QnaRead />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <QnaAdd />
        </Suspense>
      ),
    },
    {
      path: "modify/:qno",
      element: (
        <Suspense fallback={Loading}>
          <QnaModify />
        </Suspense>
      ),
    },
  ];
}
