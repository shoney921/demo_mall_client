import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

export default function BasicLayout({ children }) {
  return (
    <>
      <BasicMenu />
      <div
        className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-2
        md:space-y-0"
      >
        <main className="border-black border-2 md:w-2/3 lg:w-3/4 px-5 py-40">
          {children}
        </main>
        <aside className="border-black border-2 md:w-1/3 lg:w-1/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl"> Sidebar </h1>
        </aside>
      </div>
    </>
  );
}
