import React from "react";
import About1 from "../../../../assets/images/photos/about1.webp";
import AboutTitle from "../../../../assets/images/photos/about-title.webp";
export default function HeaderAbout() {
  return (
    <section className="page-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-7 col-xl-5">
            <div className="page-header-content">
              <div className="title-img">
                <img src={AboutTitle} alt="Image" />
              </div>
              <h2 className="page-header-title">We, are Brancy</h2>
              <h4 className="page-header-sub-title">Best cosmetics provider</h4>
              <p className="page-header-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-7">
            <div className="page-header-thumb">
              <img src={About1} width={570} height={669} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
