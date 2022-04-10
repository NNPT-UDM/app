import axiosClient from './axiosClient';
import { getLocalToken } from '../utils';
const categoryApi = {
  get(id) {
    const url = `/category/view?slug=${id}`;

    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
};

export default categoryApi;
