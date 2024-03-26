import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const loginState = useSelector((state) => state.loginSlice);
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

          {loginState.id ? (
            <>
              <li className="pr-6 text-2xl">
                <Link to={"/todo"}>Todo</Link>{" "}
              </li>
              <li className="pr-6 text-2xl">
                <Link to={"/products"}>Products</Link>{" "}
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="w-30 flex justify-end bg-orange-200 p-4 font-medium">
        <div className=" text-sm m-1 rounded text-gray-800">
          {loginState.id ? (
            <Link to={"/member/logout"}>Logout</Link>
          ) : (
            <Link to={"/member/login"}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
