import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../cartSlice';
QuantityItem.propTypes = {};

function QuantityItem({ cartItem }) {
  const { products, qty } = cartItem;
  const [qtyItem, setQtyItem] = useState(qty);
  const dispatch = useDispatch();
  function handleChange() {
    dispatch(setQuantity(products, qtyItem));
  }
  const handleDes = () => {
    setQtyItem(Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) - 1 : 1);
    const number = Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) - 1 : 1;
    const action = { products, qtyItem: number };
    dispatch(setQuantity(action));
  };
  const handleIns = () => {
    const number = Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) + 1 : 1;
    const action = { products, qtyItem: number };
    setQtyItem(Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) + 1 : 1);
    dispatch(setQuantity(action));
  };

  return (
    <>
      <div className="product-details-pro-qty border-0 mt-2">
        <div className="pro-qty">
          <div className="dec qty-btn" onClick={handleDes}>
            -
          </div>
          <input onChange={handleChange} value={qtyItem} />

          <div className="inc qty-btn" onClick={handleIns}>
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default QuantityItem;
