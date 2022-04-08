import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import cartApi from '../../../../../../api/cartApi';
import StorageKeys from '../../../../../../constants/storage-keys';
import { cartTotalSelector } from '../../selector';

export default function TotalCart({ cartItems }) {
  const history = useHistory();
  const cartTotal = useSelector(cartTotalSelector);
  async function handleCart() {
    const action = {
      items: cartItems,
      total_price: cartTotal,
    };
    try {
      const cartId = localStorage.getItem(StorageKeys.CART_ID);
      console.log(cartId);
      if (!cartId) {
        const result = await cartApi.addCart(action);
        console.log(result);
        localStorage.setItem(StorageKeys.CART_ID, result.data?.id);
        history.push(`/checkout/${result.data?.id}`);
      } else {
        const result = await cartApi.editCart(cartId, JSON.stringify(action));

        history.push(`/checkout/${result.data?.id}`);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <div className="col-12 col-md-4">
      <div className="card p-2" style={{ border: '1px black solid' }}>
        <div className="text-center h5">Thông tin thanh toán</div>
        <hr className="dropdown-divider" />
        <div className="d-flex justify-content-between">
          <p className="h6">Total Cart:</p>
          <p className="h5" style={{ color: 'red' }}>
            ${cartTotal}
          </p>
        </div>
        <hr className="dropdown-divider" />
        <button type="button" onClick={handleCart} className="btn btn-primary rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}
