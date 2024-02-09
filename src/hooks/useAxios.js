import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://plan-pixel-backend-copy.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
