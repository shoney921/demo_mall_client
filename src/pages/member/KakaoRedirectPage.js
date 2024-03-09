import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

export default function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();

  const { moveToPath } = useCustomLogin();

  const authCode = searchParams.get("code");

  const dispatch = useDispatch();

  useEffect(() => {
    // 1) 카카오 api
    getAccessToken(authCode).then((data) => {
      console.log(data);
      const accessToken = data;

      // 2) 백엔드 서버 api
      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log("-----------");
        console.log(memberInfo);
        dispatch(login(memberInfo));

        if (memberInfo && memberInfo.social) {
          moveToPath("/member/modify");
        } else {
          moveToPath("/");
        }
      });
    });
  }, [authCode]);
  return (
    <div>
      <div>Kakao Login Redirect</div>
      <div>{authCode}</div>
    </div>
  );
}
