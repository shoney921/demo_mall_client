import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  sendEmailVerification,
  checkDuplicateNickname,
  modifyMember,
} from "../../api/memberApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import ResultModal from "../common/ResultModal";

const initState = {
  email: "",
  pw: "",
  nickname: "",
  tempPw: "",
};

export default function ModifyComponent() {
  const [member, setMember] = useState(initState);
  const [dupState, setDupState] = useState(null);
  const [verificationError, setVerificationError] = useState(false); // 이메일 확인 메일 전송 에러 상태 추가
  const [passwordError, setPasswordError] = useState("");
  const [result, setResult] = useState();
  const { moveToLogin } = useCustomLogin();
  const loginInfo = useSelector((state) => state.loginSlice);

  useEffect(() => {
    setMember({ ...loginInfo, pw: "", email: "" });
  }, [loginInfo]);

  const handleChange = (e) => {
    member[e.target.name] = e.target.value;
    setMember({ ...member });
  };

  const handleClickCheckDup = () => {
    checkDuplicateNickname(member.nickname).then((result) => {
      console.log(result.result);
      setDupState(result.result === "true");
    });
  };

  const handleClickSendVerificationEmail = () => {
    // 이메일 인증 메일을 보내는 함수
    sendEmailVerification(member.email).then((result) => {
      if (result.success) {
        alert("이메일 확인 메일이 전송되었습니다.");
        setVerificationError(false); // 성공할 경우 에러 상태 초기화
      } else {
        alert("이메일 확인 메일 전송에 실패했습니다.");
        setVerificationError(true);
      }
    });
  };

  const handleClickModify = () => {
    if (member.pw !== member.tempPw) {
      setPasswordError("패스워드가 일치하지 않습니다.");
    } else if (dupState) {
      alert("중복 확인해주세요");
    } else {
      modifyMember(member).then((result) => {
        setResult("Modified");
      });
    }
  };

  const closeModal = () => {
    setResult(null);
    moveToLogin();
  };

  return (
    <div className="mt-6">
      {result ? (
        <ResultModal
          title="결과"
          content="사용 계정 설정 완료"
          callbackFn={closeModal}
        ></ResultModal>
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">email</div>
          <input
            className="w-3/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="email"
            type={"text"}
            value={member.email}
            onChange={handleChange}
          ></input>
          <button
            type="button"
            className="w-1/5 rounded p-4 text-xl  text-white bg-blue-500"
            onClick={handleClickSendVerificationEmail}
          >
            메일인증
          </button>
        </div>
      </div>
      {verificationError && ( // 에러 상태가 true일 때만 에러 메시지 표시
        <div className="flex justify-center">
          <div className="text-red-600">
            이메일 확인 메일 전송에 실패했습니다.
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">password</div>
          <input
            className="w-3/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="temppassword"
            type={"text"}
            value={member.tempPw}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">pw check</div>
          <input
            className="w-3/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="password"
            type={"text"}
            value={member.pw}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Nickname</div>
          <input
            className="w-3/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="nickname"
            type={"text"}
            value={member.nickname}
            onChange={handleChange}
          ></input>
          <button
            type="button"
            className="w-1/5 rounded p-4 text-xl  text-white bg-blue-500"
            onClick={handleClickCheckDup}
          >
            중복확인
          </button>
        </div>
      </div>
      <div className="text-red-600 ">
        {dupState != null && dupState ? <div>닉네임이 중복됩니다.</div> : <></>}
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap justify-end">
          <button
            type="button"
            className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
            onClick={handleClickModify}
          >
            Modify
          </button>
        </div>
      </div>
    </div>
  );
}
