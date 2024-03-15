import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const initState = {
  email: "",
  pw: "",
  nickname: "",
};

export default function ModifyComponent() {
  const [member, setMember] = useState(initState);

  const loginInfo = useSelector((state) => state.loginSlice);

  useEffect(() => {
    console.log("##################");
    console.log(member);
    console.log(loginInfo); //여기서 언디파인드 뜨는 이유?
    setMember({ ...loginInfo, pw: "ABCD" });
  }, [loginInfo]);

  const handleChange = (e) => {
    member[e.target.name] = e.target.value;
    setMember({ ...member });
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Email</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="email"
            type={"text"}
            value={member.email}
            readOnly
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Password</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="pw"
            type={"password"}
            value={member.pw}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Nickname</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="nickname"
            type={"text"}
            value={member.nickname}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap justify-end">
          <button
            type="button"
            className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          >
            Modify
          </button>
        </div>
      </div>
    </div>
  );
}
