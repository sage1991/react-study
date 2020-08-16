import axios from "axios";

const firebase = axios.create({
  baseURL : "https://react-burger-c56a9.firebaseio.com/",
});
firebase.interceptors.response.use(response => response, error => {
  const customError = {
    code: error.response.status,
    message: error.response.statusText,
  }
  return Promise.reject(customError);
});


const auth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts"
});
auth.interceptors.response.use(response => response, error => {
  const customError = {
    code: error.response.data.error.code,
    message: error.response.data.error.message,
  }
  return Promise.reject(customError);
});

export { firebase, auth };