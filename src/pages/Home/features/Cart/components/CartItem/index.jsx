import React from 'react';
import { useDispatch } from 'react-redux';

import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../../../../constants';
import { formatPrice } from '../../../../../../utils';
import { removeFormCart } from '../../cartSlice';
import QuantityItem from '../QuantityItem';

CartItem.propTypes = {};

function CartItem({ item = {} }) {
  const dispatch = useDispatch();
  const thumbnailURL = item.info?.photo
    ? `${STATIC_HOST}/${item.info.photo?.fieldname}/${item.info.photo?.filename}`
    : THUMBNAIL_PLACEHOLDER;

  const handleDeleteCartItem = async () => {
    await dispatch(removeFormCart(item.products));
  };
  return (
    <>
      <div className="card mb-2">
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
                alt={item?.info?.name}
                width="100%"
              />
            </div>
          </div>
          <div className="px-1 col-6">
            <p className="h5">{item?.info?.name}</p>
            <p className="mb-1">${item?.info?.price?.sell}</p>
            <QuantityItem cartItem={item} />
          </div>
          <div className="col-3">
            <div className="h-100 d-flex flex-column justify-content-between align-items-end">
              <button
                className="btn p-0 d-flex justify-content-center align-items-center bg-transparent"
                style={{ width: '1.8rem', height: '1.8rem', letterSpacing: 0 }}
                onClick={handleDeleteCartItem}
              >
                <i className="fa fa-times text-primary" style={{ fontSize: '1.5rem' }}></i>
              </button>
              <p className="h6 text-end">${item?.info?.price?.sell * item?.qty}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
