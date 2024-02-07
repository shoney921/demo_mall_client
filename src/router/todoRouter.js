import React, { lazy, Suspense } from "react";

const Loading = <div>Loading....</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));

export default function todoRouter() {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
  ];
}
