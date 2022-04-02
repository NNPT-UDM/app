import axios from 'axios';
import { API_ADDRESS } from 'constants/index';

const axiosAddress = axios.create({
  baseURL: `${API_ADDRESS}`,

  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor

// Add a response interceptor  config.headers.Authorization
axiosAddress.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosAddress;
