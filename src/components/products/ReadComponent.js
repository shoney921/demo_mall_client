import React, { useEffect, useState } from "react";
import { getOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/qnaApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";
import useCustomCart from "../../hooks/useCustomCart";
import useCustomLogin from "../../hooks/useCustomLogin";

const host = API_SERVER_HOST;

const initState = {
  pno: "",
  pname: "",
  price: 0,
  pdesc: "",
  uploadedFileNames: [],
};

export default function ReadComponent({ pno }) {
  const [product, setProduct] = useState(initState);
  const [fetiching, setFetching] = useState(false);
  const { moveToList, moveToModify } = useCustomMove();
  const { cartItems, changeCart } = useCustomCart();
  const { loginState } = useCustomLogin();

  useEffect(() => {
    setFetching(true);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);

  const handleClickAddCart = () => {
    let qty = 1;

    const addedItem = cartItems.filter((item) => item.pno === parseInt(pno))[0]; // 이미 카트에 추가되어있는 아이템

    if (addedItem) {
      if (
        window.confirm("이미 추가된 상품입니다. 추가하시겠습니까?") === false
      ) {
        return;
      }
      qty = addedItem.qty + 1;
    }

    changeCart({ memberId: loginState.id, qty: qty, pno: pno });
  };

  return (
    <div>
      ReadComponent
      {makeDiv("pno", product.pno)}
      {makeDiv("pname", product.pname)}
      {makeDiv("price", product.price)}
      {makeDiv("pdesc", product.pdesc)}
      {makeDiv("uploadedFileNames", product.uploadedFileNames)}
      {product.uploadedFileNames.map((imgFile, i) => (
        <img
          key={i}
          alt="product"
          className="m-auto rounded-md w-30"
          src={`${host}/api/products/view/${imgFile}`}
        />
      ))}
      {fetiching ? <FetchingModal /> : <></>}
      <div className="flex flex-row justify-end">
        <button
          className="bg-green-300 m-2 p-2 w-20"
          onClick={handleClickAddCart}
        >
          Add Cart
        </button>
        <button
          className="bg-red-300 m-2 p-2 w-20"
          onClick={() => moveToModify(pno)}
        >
          Modify
        </button>
        <button
          className="bg-blue-300 m-2 p-2 w-20"
          onClick={() => moveToList()}
        >
          List
        </button>
      </div>
    </div>
  );
}

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);
