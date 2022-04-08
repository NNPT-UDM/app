import { getLocalToken } from '../utils';
import axiosClient from './axiosClient';

const cartApi = {
  addCart(data) {
    const url = `/cart/add`;
    return axiosClient.post(url, data, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  editCart(id, data) {
    const url = `/cart/edit/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  get(id) {
    const url = `/cart/view?_id=${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
};

export default cartApi;
