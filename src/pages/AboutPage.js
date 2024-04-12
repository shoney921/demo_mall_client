import React from "react";
import { Link } from "react-router-dom";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";

export default function AboutPage() {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  if (!isLogin) {
    return moveToLoginReturn();
  }
  return (
    <BasicLayout>
      <div className="text-1xl m-2">
        <div className="text-4xl mb-4">
          <h2>평범하지 않은, 이상한 일주일</h2>
        </div>
        <div className="mb-3">
          "이상한 일주일" 이라는 이름은 우리 일상에서 예상치 못한 변화와 도전이
          우리에게 다가오는 그런 느낌을 담고 있습니다. 평범한 일상에서 한순간,
          우리는 예기치 않은 사건들과 마주하게 됩니다. 이상한 일주일은 우리가
          예상하지 못한 일들에 대비하고, 그 변화에 적응하며, 새로운 가능성을
          찾아가는 시간입니다.
        </div>
        <div className="mb-3">
          우리의 굿즈는 이런 이상한 일주일을 겪는 모두에게 위로와 힘이 될
          것입니다. 우리의 제품을 사용하면서 예상치 못한 상황에 대비하고,
          긍정적으로 대처할 수 있는 자신감을 얻을 수 있습니다. 이상한 일주일을
          통해 우리는 새로운 경험을 만들고, 우리의 삶을 더욱 풍부하게 만들어 갈
          수 있습니다.
        </div>
        <div className="mb-3">
          이상한 일주일을 기다리는 사람들에게 희망과 용기를 전합니다. 평범하지
          않은 일상을 즐기며, 새로운 도전에 마주하고, 자신의 내적 성장을 이루어
          나가는 모든 이들에게 이상한 일주일의 매력을 느낄 수 있기를 바랍니다.
          함께라면 어떤 변화도 이겨내고, 더 나은 미래를 향해 나아갈 수 있습니다.
        </div>
        <div className="flex justify-end m-3">
          <Link to="/"> go main </Link>
        </div>
      </div>
    </BasicLayout>
  );
}
