import React from "react";
import { API_SERVER_HOST } from "../../util/constants";

const host = API_SERVER_HOST;

export default function CartItemComponent({
  memberId,
  cino,
  pname,
  price,
  pno,
  qty,
  imageFile,
  changeCart,
}) {
  const handleClickQty = (amount) => {
    changeCart({
      memberId: memberId,
      cino: cino,
      pno: pno,
      qty: qty + amount,
    });
  };

  return (
    <div className="border p-3 m-2">
      <img src={`${host}/api/products/view/s_${imageFile}`}></img>
      <div>{cino}</div>
      <div> name : {pname}</div>
      <div> price : {price}</div>
      <div> no : {pno} </div>
      <div className="flex">
        <div className="w-2/3"> qty : {qty}</div>
        <button
          className="ml-2 bg-slate-500 text-white w-5 rounded-lg"
          onClick={() => handleClickQty(-1)}
        >
          -
        </button>
        <button
          className="ml-2 bg-slate-500 text-white w-5 rounded-lg"
          onClick={() => handleClickQty(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
