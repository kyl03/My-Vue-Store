import axios, { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

fakeShopApi.interceptors.request.use((config: { headers: AxiosHeaders }) => {
  const token = localStorage.getItem("token") ?? "";
  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); // JWT
  }
  return config;
});
export default fakeShopApi;
