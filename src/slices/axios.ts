import axios from "axios";

const instance = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8000/api/v1"
      : "https://3mmar.amadagency.net/api/v1",
  // withCredentials: true,
});

export default instance;
