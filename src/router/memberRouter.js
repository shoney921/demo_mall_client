import React, { lazy, Suspense } from "react";

const Loading = <div className="bg-red-500"> Loading....</div>;
const Login = lazy(() => import("../pages/member/LoginPage"));

export default function memberRouter() {
  return [
    {
      path: "login",
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
  ];
}
