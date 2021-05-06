import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/gustavolopesv3/demo"
});

export default api;
