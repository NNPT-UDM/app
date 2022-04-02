import { Title } from "chart.js";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

export default function CheckoutFeature() {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const {
    params: { cartId },
  } = useRouteMatch();
  useEffect(() => {
    (async () => {
      try {
        const result = await orderApi.getByCart(cartId);
        if (result.data.length > 0) {
          localStorage.removeItem(StorageKeys.CART_ID);
          history.push("/shop/cart");
        }
      } catch (error) {}
    })();
  });
  if (checkoutSuccess) {
    return (
      <div
        className="w-100 p-1 "
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="w-100 h-100 d-flex justify-align-content-center align-items-center">
          <i
            class="fa fa-check"
            style={{ fontSize: "200px", fontWeight: "700", color: "#2ecc71" }}
          ></i>

          <p
            className="h5 text-center "
            sx={{ fontWeight: "700", color: "#2ecc71" }}
          >
            Order Success
          </p>
          <div className="container-md">
            <p className="h5 text-center">
              Thank you for shopping at Brancy. Our staff will phone or text you
              as soon as possible to confirm the order
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Title value="Brancy - Checkout" />
      <div className="container">
        <div className="mY-2">
          <p
            className="h3 text-center"
            variant="h3"
            component="h1"
            align="center"
          >
            Cart information
          </p>
        </div>
        <OrderForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
