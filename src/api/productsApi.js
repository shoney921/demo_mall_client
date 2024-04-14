import { API_SERVER_HOST } from "./qnaApi";
import jwtAxios from "../util/jwtUtil";

const prefix = `${API_SERVER_HOST}/api/products`;

export const postAdd = async (product) => {
  const header = { header: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.post(`${prefix}/`, product, header);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const getOne = async (pno) => {
  const res = await jwtAxios.get(`${prefix}/${pno}`);
  return res.data;
};

export const deleteOne = async (pno) => {
  const res = await jwtAxios.delete(`${prefix}/${pno}`);
  return res.data;
};

export const putOne = async (pno, product) => {
  const header = { header: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.put(`${prefix}/${pno}`, product, header);
  return res.data;
};
