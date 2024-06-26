import React from "react";
import BasicMenu from "../components/menus/BasicMenu";
import CartComponent from "../components/menus/CartComponent";

export default function BasicLayout({ children }) {
  return (
    <>
      <BasicMenu />
      <div
        className="bg-white my-5 w-full flex flex-col md:flex-row md:space-x-2
        md:space-y-0"
      >
        <div className="border-black border-2 md:w-2/3 lg:w-3/4 justify-start">
          {children}
        </div>
        <aside className="border-black border-2 md:w-1/3 lg:w-1/4 px-5 py-40">
          <CartComponent />
        </aside>
      </div>
    </>
  );
}
