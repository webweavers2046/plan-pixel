// // Import Axios library

// import axios from "axios";


// // Create an instance with a base URL
// const apiConnector = axios.create({
//   baseURL: 'http://localhost:5000/',
// });

// export default apiConnector;
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