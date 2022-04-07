import React from 'react';
import { useDispatch } from 'react-redux';

import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../../../../constants';
import { formatPrice } from '../../../../../../utils';
import { removeFormCart } from '../../cartSlice';
import QuantityItem from '../QuantityItem';

CartItem.propTypes = {};

function CartItem({ item = {} }) {
  const dispatch = useDispatch();
  const thumbnailURL = item.product?.photo
    ? `${STATIC_HOST}/${item.product.photo?.fieldname}/${item.product.photo?.filename}`
    : THUMBNAIL_PLACEHOLDER;

  const handleDeleteCartItem = async () => {
    await dispatch(removeFormCart(item.id));
  };
  return (
    <>
      <div className="card">
        <div className="p-2 row">
          <div className="col-3">
            <div
              className="rounded"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: 'auto',
              }}
            >
              {' '}
              <img
                style={{ objectFit: 'cover', height: '100%' }}
                src={thumbnailURL}
                alt={item.product.name}
                width="100%"
              />
            </div>
          </div>
          <div className="px-1 col-6">
            <p className="h5">{item.product.name}</p>
            <p className="mb-1">${item.product.price.sell}</p>
            {item.size ? (
              <div className="mb-1 h6">
                Size:
                <span>{item.size}</span>
              </div>
            ) : (
              <></>
            )}
            <QuantityItem cartItem={item} />
          </div>
          <div className="col-3">
            <div className="h-100 d-flex flex-column justify-content-between align-item-end">
              <button style={{ width: '1.5rem',  height:"" }} onClick={handleDeleteCartItem}>
                <i class="fa fa-times"></i>
              </button>
              <p className="h6 text-end">${item.product.price.sell * item.qty}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="dropdown-divider" />
    </>
  );
}

export default CartItem;
