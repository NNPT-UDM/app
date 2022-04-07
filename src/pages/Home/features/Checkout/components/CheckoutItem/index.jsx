import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import React from 'react';
import { formatPrice } from 'utils';

CheckoutItem.propTypes = {};

function CheckoutItem({ item = {} }) {
  const thumbnailURL = item.product.photos.length
    ? `${STATIC_HOST}/${item.product.photos[0]}`
    : THUMBNAIL_PLACEHOLDER;
  // console.log(item);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container pt-1 py-1">
            <div className="col-sm-2">
              <div className="w-100 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
                <div
                  style={{
                    overflow: 'hidden',
                    border: ' 2px solid #d8a9a1',
                    borderRadius: 2,
                    width: '100%',
                    height: '70px',
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
            <div className="col-sm-7">
              <div className="d-flex w-100 h-100">
                <p className="textTwoLine">{item.product.name}</p>
                {item.size ? (
                  <p style={{ marginBottom: 1 }}>
                    Size:
                    <span>{item.size}</span>
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-flex h-100 flex-column justify-content-center align-item-end">
                <p variant="subtitle2">{formatPrice(item.product.price.sell * item.qty)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="dropdown-divider" />
    </>
  );
}

export default CheckoutItem;
