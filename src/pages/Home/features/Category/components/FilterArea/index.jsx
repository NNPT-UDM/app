import React from "react";

export default function FilterArea() {
  return (
    <div className="shop-top-bar-area">
      <div className="container">
        <div className="shop-top-bar">
          <select className="select-shoing" defaultValue={1}>
            <option data-display="Trending">Trending</option>
            <option value={1}>Featured</option>
            <option value={2}>Best Selling</option>
            <option value={3}>Alphabetically, A-Z</option>
            <option value={4}>Alphabetically, Z-A</option>
            <option value={5}>Price, low to high</option>
            <option value={6}>Price, high to low</option>
            <option value={7}>Date, new to old</option>
            <option value={8}>Date, old to new</option>
          </select>
          <div className="select-on-sale d-flex d-md-none">
            <span>On Sale :</span>
            <select className="select-on-sale-form" defaultValue={1}>
              <option value={0}>Yes</option>
              <option value={1}>No</option>
            </select>
          </div>
          {/* <div className="select-price-range">
            <h4 className="title">Pricing</h4>
            <div className="select-price-range-slider">
              <div className="slider-range" id="slider-range" />
              <div className="slider-labels">
                <span id="slider-range-value1" />
                <span>-</span>
                <span id="slider-range-value2" />
              </div>
            </div>
          </div> */}
          <div className="select-on-sale d-none d-md-flex">
            <span>On Sale :</span>
            <select className="select-on-sale-form" defaultValue={1}>
              <option value={0}>Yes</option>
              <option value={1}>No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
