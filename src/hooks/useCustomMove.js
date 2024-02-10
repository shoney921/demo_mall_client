import {
  createSearchParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  return parseInt(param ? param : defaultValue);
};

export default function useCustomMove() {
  const navigate = useNavigate();

  // 페이지와 사이즈 쿼리 파라 존재하면 값 가져옴
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  // 쿼리 파라 유지하기 위함
  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }
    navigate({ pathname: "../list", search: queryStr });
  };

  const moveToModify = (num) => {
    navigate({ pathname: `../modify/${num}`, search: queryDefault });
  };

  return { moveToList, moveToModify, page, size };
}
