import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  // baseURL: "https://plan-pixel-backend-esp08h4gq-shakil-ahmmed8882.vercel.app",
  baseURL: "https://plan-pixel-backend-jet.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
