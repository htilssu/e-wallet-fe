import axios from "axios";
import { getCookie } from "./cookieUtil.js";

// const apiUrl = "http://ewalletapi.htilssu.id.vn/api";
const apiUrl = "http://localhost:8080/api";

const request = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

const post = async (url, data) => {
  //get cookies from browser
  const token = getCookie("token");
  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  request.defaults.headers.common["Accept"] = `*`;
  return await request.post(url, data);
};

const get = async (url) => {
  //get cookies from browser
  const token = getCookie("token");
  console.log(request);
  request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return await request.get(url);
};

export { request, post, get };
