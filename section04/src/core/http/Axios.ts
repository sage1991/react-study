import axios from "axios";

const firebase = axios.create({
  baseURL : "https://react-burger-c56a9.firebaseio.com/",
});


export { firebase };