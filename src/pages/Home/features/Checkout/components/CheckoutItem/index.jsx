import React from 'react';

import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../../../../constants';

CheckoutItem.propTypes = {};

function CheckoutItem({ item = {} }) {
  const thumbnailURL = item.product?.photo
    ? `${STATIC_HOST}/${item.product.photo?.fieldname}/${item.product.photo?.filename}`
    : THUMBNAIL_PLACEHOLDER;
  // console.log(item);

  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <div className="w-100 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {item.qty}
                </span>
                <div
                  className="rounded"
                  style={{
                    overflow: 'hidden',
                    borderRadius: 2,
                    width: '100%',
                    height: 'auto',
                  }}
                >
                  <img
                    className="w-100 h-100"
                    style={{ objectFit: 'contain' }}
                    src={thumbnailURL}
                    alt={item.product.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="textTwoLine">{item.product.name}</p>
              <p className="d-block">${item.product.price.sell * item.qty}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutItem;
