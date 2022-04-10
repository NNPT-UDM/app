import React from 'react';
import { useSelector } from 'react-redux';
import HeaderAreaSmall from '../../../../components/HeaderAreaSmall';
import CartItem from './components/CartItem';
import TotalCart from './components/TotalCart';

export default function CartFeature() {

  const { cartItems = [] } = useSelector((state) => state.cart);
  
  return (
    <>
      <HeaderAreaSmall title="Cart" />
      <div className="container">
        <div className="my-2">
          <p className="text-center h3">Giỏ hàng của bạn</p>
          <p className="text-center">
            {cartItems.length
              ? `Có ${cartItems.length} sản phẩm trong giỏ hàng`
              : 'Không có sản phẩm nào trong giả hàng'}
          </p>
        </div>
        {cartItems.length ? (
          <div className="row">
            <div className="col-12 col-md-8">
              {cartItems.map((item) => {
                return <CartItem key={item.products} item={item} />;
              })}
            </div>
            <TotalCart cartItems={cartItems}/>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
