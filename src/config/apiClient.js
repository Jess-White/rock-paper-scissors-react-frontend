import axios from "axios";

const BASE_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/`,
});

export default apiClient;