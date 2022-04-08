import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import StorageKeys from '../../../../constants/storage-keys';
import { removeAllCart } from '../Cart/cartSlice';
import Title from '../../../../components/Title';
import OrderForm from './components/OrderForm';
import HeaderAreaSmall from '../../../../components/HeaderAreaSmall';
import useCart from '../../hooks/useCart';
import TopLinearProgress from '../../../../components/TopLinearProgress';
import orderApi from '../../../../api/orderApi';
import { toast } from 'react-toastify';
import useCheckout from '../../hooks/useCheckout';
import { useDispatch, useSelector } from 'react-redux';
export default function CheckoutFeature() {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const dispatch = useDispatch();
  const {
    params: { cartId },
  } = useRouteMatch();
  const { _id } = useSelector((state) => state.user.current);
  const { cart, loading } = useCart(cartId);
  const { data } = useCheckout(cartId);
  const handleSubmit = async (values) => {
    console.log(values);
    const { full_name, email, phone, description, province, district, ward, note } = values;
    let action = {
      customer: _id,
      cart: cartId,
      order_info: {
        full_name,
        email,
        phone,
        delivery_address: {
          description,
          province,
          district,
          ward,
        },
        note,
      },
    };
    try {
      const result = await orderApi.addOrder(action);
      if (!!result) {
        setCheckoutSuccess(true);
        toast.success('Order Success');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      if (checkoutSuccess) {
        dispatch(removeAllCart());
      }
    })();
  }, [checkoutSuccess]);
  if (checkoutSuccess) {
    return (
      <div
        className="w-100 p-1"
        style={{
          height: 'calc(100vh - 80px)',
        }}
      >
        <div className="container h-100">
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <i className="fa fa-check" style={{ fontSize: '200px', fontWeight: '700', color: '#2ecc71' }}></i>

            <p className="h5 text-center " sx={{ fontWeight: '700', color: '#2ecc71' }}>
              Order Success
            </p>
            <div className="container-md">
              <p className="h5 text-center">
                Thank you for shopping at Brancy. Our staff will phone or text you as soon as possible to
                confirm the order
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {!loading ? <></> : <TopLinearProgress />}
      <HeaderAreaSmall title="Checkout" />
      <Title value="Brancy - Checkout" />
      <div className="container my-3">
        <OrderForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
