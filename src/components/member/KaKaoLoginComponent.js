import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";

const link = getKakaoLoginLink();

const KaKaoLoginComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mr-4">로그인시에 자동 가입처리 됩니다.</div>
      <div className="flex justify-center">
        <div className="text-center text-1xl p-2 shadow-sm rounded text-white bg-yellow-500">
          <Link to={link}>KaKao Login</Link>
        </div>
      </div>
    </div>
  );
};

export default KaKaoLoginComponent;
