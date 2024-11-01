import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000/swagger/index.html", //altere para o endereço da sua api
});

export default api;
