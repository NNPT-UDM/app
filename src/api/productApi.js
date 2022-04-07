import axiosClient from './axiosClient';
import { getLocalToken } from '../utils';
const productApi = {
  getListProduct() {
    const url = `/product/view`;
    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  getListCategory() {
    const url = `/category/view?per_page=100`;
    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  get(id) {
    const url = `/product/view?slug=${id}`;

    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
};

export default productApi;
