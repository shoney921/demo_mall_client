import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const host = `${API_SERVER_HOST}/api/member`;

export const loginPost = async (loginParam) => {
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };

  const form = new FormData();
  form.append("username", loginParam.email);
  form.append("password", loginParam.pw);

  const res = await axios.post(`${host}/login`, form, header);

  return res.data;
};

export const modifyMember = async (member) => {
  const res = await axios.put(`${host}/modify`, member);
  return res.data;
};

export const checkDuplicateNickname = async (nickname) => {
  const res = await axios.get(`${host}/duplicate?nickname=${nickname}`);
  return res.data;
};

export const sendEmailVerification = async (email) => {
  // todo 아래 서버 구현 이후 주석 해제
  // const res = await axios.get(`${host}/email?id=${email}`);
  return false;
};
