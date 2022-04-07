import React from 'react';

export default function Address({ name = '', address = '', phone = '' }) {
  return (
    <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
      <div className="myaccount-content">
        <h3>Billing Address</h3>
        {!address && !phone ? (
          <>
            <p>
              <strong>Not Address</strong>
            </p>
            <a href="#/" className="check-btn sqr-btn">
              <i className="fa fa-edit" /> Add Address
            </a>
          </>
        ) : (
          <>
            <address>
              <p>
                <strong>{name}</strong>
              </p>
              <p>Address: {address}</p>
              <p>Mobile: {phone}</p>
            </address>
            <a href="#/" className="check-btn sqr-btn">
              <i className="fa fa-edit" /> Edit Address
            </a>
          </>
        )}
      </div>
    </div>
  );
}
