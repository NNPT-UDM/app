import React from "react";

export default function ReviewForm() {
  return (
    <div className="col-lg-5">
      <div className="product-reviews-form-wrap">
        <h4 className="product-form-title">Leave a replay</h4>
        <div className="product-reviews-form">
          <form action="#">
            <div className="form-input-item">
              <textarea
                className="form-control"
                placeholder="Enter you feedback"
                defaultValue={""}
              />
            </div>
            <div className="form-input-item">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="form-input-item">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-input-item">
              <div className="form-ratings-item">
                <select
                  id="product-review-form-rating-select"
                  className="select-ratings"
                >
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                </select>
                <span className="title">Provide Your Ratings</span>
                <div className="product-ratingsform-form-wrap">
                  <div className="product-ratingsform-form-icon">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div
                    id="product-review-form-rating"
                    className="product-ratingsform-form-icon-fill"
                  >
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              <div className="reviews-form-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="ReviewsFormCheckbox"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="ReviewsFormCheckbox"
                >
                  Provide ratings anonymously.
                </label>
              </div>
            </div>
            <div className="form-input-item mb-0">
              <button type="submit" className="btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
