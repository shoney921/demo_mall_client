import React, { useEffect, useRef, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/qnaApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";

const host = API_SERVER_HOST;

const initState = {
  pno: "",
  pname: "",
  price: 0,
  pdesc: "",
  delFlag: false,
  uploadedFileNames: [],
};

export default function ModifyComponent({ pno }) {
  const [product, setProduct] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(false);
  const { moveToList, moveToRead } = useCustomMove();
  const uploadRef = useRef();

  useEffect(() => {
    setFetching(true);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  const deleteOldImpages = (imageName) => {
    const resultFileName = product.uploadedFileNames.filter(
      (fileName) => fileName !== imageName
    );
    product.uploadedFileNames = resultFileName;
    setProduct({ ...product });
  };

  const handleClickModify = () => {
    const files = uploadRef.current.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    for (let i = 0; i < product.uploadedFileNames.length; i++) {
      formData.append("uploadedFileNames", product.uploadedFileNames[i]);
    }

    setFetching(true);

    putOne(pno, formData).then((data) => {
      setResult("Modified");
      setFetching(false);
    });
  };

  const handleClickDelete = () => {
    setFetching(true);
    deleteOne(pno).then((data) => {
      setResult("Deleted");
      setFetching(false);
    });
  };

  const closeModal = () => {
    if (result === "Modified") {
      moveToRead(pno);
    }
    if (result === "Deleted") {
      moveToList({ page: 1 });
    }
    setResult(null);
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {fetching ? <FetchingModal /> : <></>}
      {result ? (
        <ResultModal
          title={`${result}`}
          content={`처리되었습니다.`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
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
          <div className="w-1/5 p-6 text-right font-bold">DELETE</div>
          <select
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
          >
            <option value={false}>사용</option>
            <option value={true}>삭제</option>
          </select>
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
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Images</div>
          <div className="w-4/5 justify-center flex flex-wrap items-start">
            {product.uploadedFileNames.map((imgFile, i) => (
              <div
                className="flex justify-center flex-col w-1/3 m-1 align-baseline"
                key={i}
              >
                <button
                  onClick={() => deleteOldImpages(imgFile)}
                  className="bg-blue-500 text-3xl text-white"
                >
                  DELETE
                </button>
                <img alt="img" src={`${host}/api/products/view/s_${imgFile}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <button onClick={handleClickDelete} className="bg-red-500 m-2 p-2 w-20">
          Delete
        </button>
        <button onClick={handleClickModify} className="bg-red-300 m-2 p-2 w-20">
          Modify
        </button>
        <button
          onClick={() => moveToList()}
          className="bg-blue-300 m-2 p-2 w-20"
        >
          List
        </button>
      </div>
    </div>
  );
}
