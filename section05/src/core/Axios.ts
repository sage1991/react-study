import axios from "axios";


axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


const instance = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH-TOKEN";
instance.defaults.headers.post["Content-Type"] = "application/json";


export default instance;