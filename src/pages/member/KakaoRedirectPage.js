import React from "react";
import { useSearchParams } from "react-router-dom";

export default function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();

  const authCode = searchParams.get("code");
  return (
    <div>
      <div>Kakao Login Redirect</div>
      <div>{authCode}</div>
    </div>
  );
}
