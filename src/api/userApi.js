import StorageKeys from 'constants/storage-keys';
import Cookies from 'js-cookie';
import axiosClient from './axiosClient';
function getLocalToken() {
  const token = Cookies.get(StorageKeys.TOKEN);
  return `Bearer ${token}`;
}
const userApi = {
  login(data) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
  logout() {
    const url = '/auth/logout';
    return axiosClient.post(url);
  },
  getMe() {
    const url = '/user/me';

    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  editMe(data) {
    const url = '/user/edit-me';
    return axiosClient.put(url, data, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  changePassword(data) {
    const url = '/auth/change-password';
    return axiosClient.put(url, data, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  forgotPassword(data) {
    const url = '/auth/forgot-password';
    return axiosClient.post(url, data);
  },
  resetPassword(data, id) {
    const url = `/auth/reset-password/${id}`;
    return axiosClient.put(url, data);
  },
  checkTokenPassword(id) {
    const url = `/auth/check-token/${id}`;
    return axiosClient.get(url);
  },
};
export default userApi;
