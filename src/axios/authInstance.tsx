import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 30 * 1000,
});
export default authInstance;
