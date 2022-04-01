import React from "react";
import ReviewForm from "../ReviewForm";

export default function Review() {
  return (
    <div className="row">
      <div className="col-lg-7">
        <div
          className="nav product-details-nav"
          id="product-details-nav-tab"
          role="tablist"
        >
          <button
            className="nav-link"
            id="specification-tab"
            data-bs-toggle="tab"
            data-bs-target="#specification"
            type="button"
            role="tab"
            aria-controls="specification"
            aria-selected="false"
          >
            Specification
          </button>
          <button
            className="nav-link active"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="true"
          >
            Review
          </button>
        </div>
        <div className="tab-content" id="product-details-nav-tabContent">
          <div
            className="tab-pane"
            id="specification"
            role="tabpanel"
            aria-labelledby="specification-tab"
          >
            <ul className="product-details-info-wrap">
              <li>
                <span>Weight</span>
                <p>250 g</p>
              </li>
              <li>
                <span>Dimensions</span>
                <p>10 x 10 x 15 cm</p>
              </li>
              <li>
                <span>Materials</span>
                <p>60% cotton, 40% polyester</p>
              </li>
              <li>
                <span>Other Info</span>
                <p>American heirloom jean shorts pug seitan letterpress</p>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              velit corporis quo voluptate culpa soluta, esse accusamus, sunt
              quia omnis amet temporibus sapiente harum quam itaque libero
              tempore. Ipsum, ducimus. lorem
            </p>
          </div>
          <div
            className="tab-pane fade show active"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            {/*== Start Reviews Content Item ==*/}
            <ReviewItem />
            {/*== End Reviews Content Item ==*/}
          </div>
        </div>
      </div>
      <ReviewForm />
    </div>
  );
}
