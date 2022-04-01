import React from "react";
import Shop1 from "../../assets/images/shop/1.webp";
export default function ProductItem() {
  return (
    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
      <div className="product-item">
        <div className="product-thumb">
          <a className="d-block" href="product-details.html">
            <img src={Shop1} width="370" height="450" alt="Image-HasTech" />
          </a>
          <span className="flag-new">new</span>
          <div className="product-action">
            <button
              type="button"
              className="product-action-btn action-btn-cart"
              data-bs-toggle="modal"
              data-bs-target="#action-CartAddModal"
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info">
          <div className="product-rating">
            <div className="rating">
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <div className="reviews">150 reviews</div>
          </div>
          <h4 className="title">
            <a href="product-details.html">Readable content DX22</a>
          </h4>
          <div className="prices">
            <span className="price">$210.00</span>
            <span className="price-old">300.00</span>
          </div>
        </div>
        <div className="product-action-bottom">
          <button
            type="button"
            className="product-action-btn action-btn-cart"
            data-bs-toggle="modal"
            data-bs-target="#action-CartAddModal"
          >
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
