import React from "react";
import logo1 from "../../../../../../assets/images/brand-logo/1.webp";
import logo2 from "../../../../../../assets/images/brand-logo/2.webp";
import logo3 from "../../../../../../assets/images/brand-logo/3.webp";
import logo4 from "../../../../../../assets/images/brand-logo/4.webp";
export default function BrandLogoArea() {
  return (
    <div className="section-space">
      <div className="container">
        <div className="swiper brand-logo-slider-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide brand-logo-item">
              <img src={logo1} width={155} height={110} alt="Image-HasTech" />
            </div>
            <div className="swiper-slide brand-logo-item">
              <img src={logo2} width={241} height={110} alt="Image-HasTech" />
            </div>
            <div className="swiper-slide brand-logo-item">
              <img src={logo3} width={147} height={110} alt="Image-HasTech" />
            </div>
            <div className="swiper-slide brand-logo-item">
              <img src={logo4} width={196} height={110} alt="Image-HasTech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
