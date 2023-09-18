import axios from "axios";

const http = axios.create({
  baseURL: 'https://47.109.153.240:443',
  timeout: 10000,
})




// 添加请求拦截器
http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default http

