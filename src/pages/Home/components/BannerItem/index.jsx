import React from "react";
import BannerImg from "../../../../assets/images/shop/banner/1.webp";
export default function BannerItem() {
  return (
    <div className="col-sm-6 col-lg-4">
      <a href="product.html" className="product-banner-item">
        <img src={BannerImg} width="370" height="370" alt="Image-HasTech" />
      </a>
    </div>
  );
}
