import axios from "axios";

const api = axios.create({
  baseURL: "https://amigo-secreto-backend.herokuapp.com/"
});


export default api