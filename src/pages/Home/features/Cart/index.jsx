import React from "react";
import { useSelector } from "react-redux";
import HeaderAreaSmall from "../../../../components/HeaderAreaSmall";

export default function CartFeature() {
  const { cartItems = [] } = useSelector((state) => state.cart);
  const handleCart = () => {};
  return (
    <>
      <HeaderAreaSmall title="Cart" />
      <div className="container">
        <div className="my-2">
          <p className="text-center h3">Giỏ hàng của bạn</p>
          <p className="text-center">
            {cartItems.length
              ? `Có ${cartItems.length} sản phẩm trong giỏ hàng`
              : "Không có sản phẩm nào trong giả hàng"}
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            {cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <div className="col-12 col-md-4">
            {cartItems.length ? (
              <div className="card" style={{ p: 1, border: "1px black solid" }}>
                <div className="text-center h5">Thông tin thanh toán</div>
                <hr class="dropdown-divider" />
                <div className="d-flex justify-content-between">
                  <p className="h6">Total Cart:</p>
                  <p className="h5" style={{ color: "red" }}>
                    1111
                  </p>
                </div>
                <hr class="dropdown-divider" />

                <button onClick={handleCart} className="btn btn-primary">
                  Thanh Toán
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
