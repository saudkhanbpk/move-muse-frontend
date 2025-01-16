import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const ApiService = {
  get: (path, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.get(`${BaseUrl}/api/v1/${path}`, { ...config, headers });
  },
  post: (path, payload, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.post(`${BaseUrl}/api/v1/${path}`, payload, { ...config, headers });
  },
  put: (path, payload, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.put(`${BaseUrl}/api/v1/${path}`, payload, { ...config, headers });
  },
  delete: (path, config = {}) => {
    const token = getAuthToken();
    const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers;
    return axios.delete(`${BaseUrl}/api/v1/${path}`, { ...config, headers });
  },
};

export default ApiService;
