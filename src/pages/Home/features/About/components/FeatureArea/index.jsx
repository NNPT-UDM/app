import React from "react";
import Feature1 from "../../../../../../assets/images/icons/feature1.webp";
import Feature2 from "../../../../../../assets/images/icons/feature2.webp";
import Feature3 from "../../../../../../assets/images/icons/feature3.webp";
export default function FeatureArea() {
  return (
    <div className="feature-area section-space">
      <div className="container">
        <div className="row mb-n9">
          <div className="col-md-6 col-lg-4 mb-8">
            <div className="feature-item">
              <h5 className="title">
                <img
                  className="icon"
                  src={Feature1}
                  width={60}
                  height={60}
                  alt="Icon"
                />
                Support Team
              </h5>
              <p className="desc">
                Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim
                metus, turpis.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-8">
            <div className="feature-item">
              <h5 className="title">
                <img
                  className="icon"
                  src={Feature2}
                  width={60}
                  height={60}
                  alt="Icon"
                />
                Certification
              </h5>
              <p className="desc">
                Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim
                metus, turpis.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-8">
            <div className="feature-item">
              <h5 className="title">
                <img
                  className="icon"
                  src={Feature3}
                  width={60}
                  height={60}
                  alt="Icon"
                />
                Natural Products
              </h5>
              <p className="desc">
                Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim
                metus, turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
