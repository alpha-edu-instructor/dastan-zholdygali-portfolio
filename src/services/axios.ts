import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dastan.portfolio-adilzhexenov.kz",
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
