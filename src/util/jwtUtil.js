import axios from "axios";
import { getCookie } from "./cookieUtil";

const jwtAxios = axios.create();

//before request
const beforeReq = (config) => {
  console.log("before request.............");

  const memberInfo = getCookie("member");
  if (!memberInfo) {
    console.log("Member NOT FOUND");
    return Promise.reject({
      response: {
        data: { error: "REQUIRE_LOGIN" },
      },
    });
  }
  const { accessToken } = memberInfo;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

//fail request
const requestFail = (err) => {
  console.log("request error............");
  return Promise.reject(err);
};

//before return response
const beforeRes = async (res) => {
  console.log("before return response...........");
  return res;
};

//fail response
const responseFail = (err) => {
  console.log("response fail error.............");
  return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
