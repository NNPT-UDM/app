import React from "react";
import ProductItem from "../../../../components/ProductItem";
import BannerArea from "../BannerArea";

export default function ProductArea() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="title">Top sale</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
     
      </div>
    </section>
  );
}
