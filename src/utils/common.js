import $ from 'jquery';
import Cookies from 'js-cookie';
import StorageKeys from '../constants/storage-keys';
export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}
export function htmlDecode(value) {
  return $('<textarea/>').html(value).text();
}
export function getLocalToken() {
  const token = Cookies.get(StorageKeys.TOKEN);
  return `Bearer ${token}`;
}
export function isEmptyObj(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
