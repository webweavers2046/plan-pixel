import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://plan-pixel-backend-esp08h4gq-shakil-ahmmed8882.vercel.app",
});

const apiConnector = () => {
  return axiosInstance;
};

export default apiConnector;
