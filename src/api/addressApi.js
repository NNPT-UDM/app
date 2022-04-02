import axiosAddress from './axiosAddress';

const addressApi = {
  getProvinces() {
    const url = `/p`;

    return axiosAddress.get(url);
  },
  getDistricts(id) {
    const url = `/p/${id}?depth=2`;
    return axiosAddress.get(url);
  },
  getWards(id) {
    const url = `/d/${id}?depth=2`;
    return axiosAddress.get(url);
  },
};

export default addressApi;
