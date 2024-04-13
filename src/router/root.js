import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";
import { productsRouter } from "./productsRouter";
import qnaRouter from "./qnaRouter";

const Loading = <div className="bg-red-500"> Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const QnaIndex = lazy(() => import("../pages/qna/IndexPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

export const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "qna",
    element: (
      <Suspense fallback={Loading}>
        <QnaIndex />
      </Suspense>
    ),
    children: qnaRouter(),
  },
  {
    path: "products",
    element: (
      <Suspense fallback={Loading}>
        <ProductsIndex />
      </Suspense>
    ),
    children: productsRouter(),
  },
  {
    path: "member",
    children: memberRouter(),
  },
]);
