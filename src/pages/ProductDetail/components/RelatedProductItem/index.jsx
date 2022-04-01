import React from "react";
import ProductImg from "../../../../assets/images/shop/8.webp";

export default function RelatedProductItem() {
  return (
    <div className="swiper-slide mb-10">
      {/*== Start Product Item ==*/}
      <div className="product-item product-st2-item">
        <div className="product-thumb">
          <a className="d-block" href="product-details.html">
            <img
              src={ProductImg}
              width={370}
              height={450}
              alt="Image-HasTech"
            />
          </a>
          <span className="flag-new">new</span>
        </div>
        <div className="product-info">
          <div className="product-rating">
            <div className="rating">
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-half-o" />
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
          <div className="product-action">
            <button
              type="button"
              className="product-action-btn action-btn-cart"
              data-bs-toggle="modal"
              data-bs-target="#action-CartAddModal"
            >
              <span>Add to cart</span>
            </button>
            <button
              type="button"
              className="product-action-btn action-btn-quick-view"
              data-bs-toggle="modal"
              data-bs-target="#action-QuickViewModal"
            >
              <i className="fa fa-expand" />
            </button>
            <button
              type="button"
              className="product-action-btn action-btn-wishlist"
              data-bs-toggle="modal"
              data-bs-target="#action-WishlistModal"
            >
              <i className="fa fa-heart-o" />
            </button>
          </div>
        </div>
      </div>
      {/*== End prPduct Item ==*/}
    </div>
  );
}
