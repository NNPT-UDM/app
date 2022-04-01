import React from "react";
import BannerImg from "../../../../assets/images/shop/banner/7.webp";
export default function BannerArea() {
  return (
    <div className="container">
      {/*== Start Product Category Item ==*/}
      <a href="product.html" className="product-banner-item">
        <img src={BannerImg} width={1170} height={240} alt="Image-HasTech" />
      </a>
      {/*== End Product Category Item ==*/}
    </div>
  );
}
