// created a centralized base-url to be used anywhere in the application
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
//   baseURL: "https://tasklet-server-mongo-db.vercel.app",
});

const apiConnector = () => {
  return axiosInstance;
};

export default apiConnector;
