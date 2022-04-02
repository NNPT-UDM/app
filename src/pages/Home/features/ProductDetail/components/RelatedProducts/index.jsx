import React from "react";
import RelatedProductItem from "../RelatedProductItem";

export default function RelatedProducts() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 className="title">Related Products</h2>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-n10">
          <div className="col-12">
            <div className="swiper related-product-slide-container">
              <div className="swiper-wrapper">
                <RelatedProductItem />
                <RelatedProductItem />
                <RelatedProductItem />
                <RelatedProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
