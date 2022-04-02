import { getLocalToken } from 'utils';
import axiosClient from './axiosClient';

const orderApi = {
  addOrder(data) {
    const url = `/order/add`;
    return axiosClient.post(url, data, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
  getByCart(id) {
    const url = `/order/view?cart=${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: getLocalToken(), // headers token
      },
    });
  },
};

export default orderApi;
