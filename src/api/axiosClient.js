import axios from 'axios';

import Cookies from 'js-cookie';
import { STATIC_HOST } from '../constants';
import StorageKeys from '../constants/storage-keys';
function getLocalToken() {
  const token = Cookies.get(StorageKeys.TOKEN);
  return `Bearer ${token}`;
}
const axiosClient = axios.create({
  baseURL: `${STATIC_HOST}/api`,
  // baseURL: 'http://localhost:5004/api/v1/',
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
// Add a request interceptor

// Add a response interceptor  config.headers.Authorization
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
