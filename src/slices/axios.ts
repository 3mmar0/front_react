import axios from "axios";

const instance = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://127.0.0.1:8000/api/v1"
      : "https://ecommerce-api.ammarelgendy.com/api/v1",
  // withCredentials: true,
});

export default instance;
