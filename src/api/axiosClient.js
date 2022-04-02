import axios from 'axios';
import { STATIC_HOST } from 'constants/index';
import StorageKeys from 'constants/storage-keys';
import Cookies from 'js-cookie';
function getLocalToken() {
  const token = Cookies.get(StorageKeys.TOKEN);
  return `Bearer ${token}`;
}
const axiosClient = axios.create({
  baseURL: `${STATIC_HOST}/api/v1`,
  // baseURL: 'http://localhost:5004/api/v1/',
  headers: {
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'https://api.ezfrontend.com/',
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
