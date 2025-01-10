import axios from "axios";

const API_BASE_URL = "https://move-muse-backend-c131.onrender.com/api/v1/";
// const API_BASE_URL = "http://localhost:5000/api/v1/";

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const ApiService = {
  get: (path, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.get(`${API_BASE_URL}${path}`, { ...config, headers });
  },
  post: (path, payload, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.post(`${API_BASE_URL}${path}`, payload, { ...config, headers });
  },
  put: (path, payload, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.put(`${API_BASE_URL}${path}`, payload, { ...config, headers });
  },
  delete: (path, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.delete(`${API_BASE_URL}${path}`, { ...config, headers });
  },
};

export default ApiService;
