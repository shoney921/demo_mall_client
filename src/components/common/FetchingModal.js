import React from "react";

export default function FetchingModal() {
  return (
    <div
      className={`fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20`}
    >
      <div className="absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded m-10 px-6 min-w-[500px]">
        <div className="text-4xl border-orange-400 border-b-4 pt-4 pb-4">
          Loading....
        </div>
      </div>
    </div>
  );
}
