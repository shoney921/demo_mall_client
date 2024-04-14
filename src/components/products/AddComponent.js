import React, { useRef, useState } from "react";
import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../util/constants";

const initSate = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [],
};

export default function AddComponent() {
  const [product, setProduct] = useState(initSate);
  const uploadRef = useRef();

  const { moveToList } = useCustomMove();
  const {
    mutate: addProduct,
    isPending,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: (product) => postAdd(product),
  });

  const queryClient = useQueryClient();

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  const handleClickAdd = (e) => {
    console.log(product);

    const formData = new FormData();
    const files = uploadRef.current.files;

    console.log(files.length);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);

    console.log(formData);

    addProduct(formData);
  };

  const closeModal = () => {
    queryClient.invalidateQueries(QUERY_KEYS.GET_PRODUCTS_LIST);
    moveToList({ page: 1 });
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="pname"
            type={"text"}
            value={product.pname}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Desc</div>
          <textarea
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
            name="pdesc"
            rows="4"
            onChange={handleChangeProduct}
            value={product.pdesc}
          >
            {product.pdesc}
          </textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Price</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="price"
            type={"number"}
            value={product.price}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Files</div>
          <input
            ref={uploadRef}
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            type={"file"}
            multiple={true}
          ></input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
          <button
            type="button"
            className="rounded p-4 w-36 bg-blue-500 text-xl text-white "
            onClick={handleClickAdd}
          >
            ADD
          </button>
        </div>
      </div>
      {isPending ? <FetchingModal /> : <></>}
      {isSuccess ? (
        <ResultModal
          callbackFn={closeModal}
          title={"Product Add Complete"}
          content={`${data.result} 상품 등록 완료`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
