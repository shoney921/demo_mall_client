import axios from "axios";
import jwtAxios from "../util/jwtUtil";

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/qna`;

export const getOne = async (qno) => {
  const res = await jwtAxios.get(`${prefix}/${qno}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${prefix}/list`, { params: { page, size } });
  return res.data;
};

export const postAdd = async (qnaObj) => {
  const res = await jwtAxios.post(`${prefix}/`, qnaObj);
  return res.data;
};

export const deleteOne = async (qno) => {
  const res = await jwtAxios.delete(`${prefix}/${qno}`);
  return res.data;
};

export const putOne = async (qnaObj) => {
  const res = await jwtAxios.put(`${prefix}/${qnaObj.qno}`, qnaObj);
  return res.data;
};
