import React from "react";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  return (
    <nav id="navbar" className=" flex bg-black">
      <div className="w-full bg-gray-800">
        <ul className="flex p-4 text-white font-bold">
          <li className="pr-6 text-2xl">
            <Link to={"/"}>Main</Link>{" "}
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/todo"}>Todo</Link>{" "}
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/products"}>Products</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="w-30 flex justify-end bg-orange-200 p-4 font-medium">
        <div className=" text-sm m-1 rounded text-gray-800">Login</div>
      </div>
    </nav>
  );
}
