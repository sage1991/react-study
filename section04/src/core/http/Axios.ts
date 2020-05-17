import axios from "axios";

const instance = axios.create({
  baseURL : "https://react-burger-c56a9.firebaseio.com/",
});


export default instance;