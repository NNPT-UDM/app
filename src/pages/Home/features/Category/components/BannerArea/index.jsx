import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../../../../../assets/images/shop/banner/7.webp";
export default function BannerArea() {
  return (
    <section className="section-space">
      <div className="container">
        {/*== Start Product Category Item ==*/}
        <Link to="/product" className="product-banner-item">
          <img src={BannerImg} width={1170} height={240} alt="Image-HasTech" />
        </Link>
        {/*== End Product Category Item ==*/}
      </div>
    </section>
  );
}
