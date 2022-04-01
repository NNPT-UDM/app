import React from "react";
import CommentImg from "../../../../assets/images/shop/product-details/comment1.webp";
export default function ReviewItem() {
  return (
    <div className="product-review-item">
      <div className="product-review-top">
        <div className="product-review-thumb">
          <img src={CommentImg} alt="Images" />
        </div>
        <div className="product-review-content">
          <span className="product-review-name">Tomas Doe</span>
          <span className="product-review-designation">Delveloper</span>
          <div className="product-review-icon">
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-half-o" />
          </div>
        </div>
      </div>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
        amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida
        duis. Nascetur scelerisque massa sodales.
      </p>
      <button type="button" className="review-reply">
        <i className="fa fa fa-undo" />
      </button>
    </div>
  );
}
