import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  // baseURL: "https://plan-pixel-backend-jet.vercel.app/",
  baseURL: "https://plan-pixel-backend.vercel.app/",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
