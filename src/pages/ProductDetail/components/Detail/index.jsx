import React from "react";
import ProductImg from "../../../../assets/images/shop/product-details/4.webp";
export default function Detail() {
  return (
    <div className="row product-details">
      <div className="col-lg-6">
        <div className="product-details-thumb">
          <img src={ProductImg} width={570} height={693} alt="Image" />
          <span className="flag-new">new</span>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-details-content">
          <h5 className="product-details-collection">Premioum collection</h5>
          <h3 className="product-details-title">
            Offbline Instant Age Rewind Eraser.
          </h3>
          <div className="product-details-review mb-7">
            <div className="product-review-icon">
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-half-o" />
            </div>
            <button type="button" className="product-review-show">
              150 reviews
            </button>
          </div>
          <p className="mb-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            repellendus. Nam voluptate illo ut quia non sapiente provident alias
            quos laborum incidunt, earum accusamus, natus. Vero pariatur ut
            veniam sequi amet consectetur.
          </p>
          <div className="product-details-pro-qty">
            <div className="pro-qty">
              <input type="text" title="Quantity" defaultValue={01} />
            </div>
          </div>
          <div className="product-details-shipping-cost">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="ShippingCost"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="ShippingCost">
              Shipping from USA, Shipping Fees $4.22
            </label>
          </div>
          <div className="product-details-action">
            <h4 className="price">$254.22</h4>
            <div className="product-details-cart-wishlist">
              <button
                type="button"
                className="btn-wishlist"
                data-bs-toggle="modal"
                data-bs-target="#action-WishlistModal"
              >
                <i className="fa fa-heart-o" />
              </button>
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#action-CartAddModal"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
