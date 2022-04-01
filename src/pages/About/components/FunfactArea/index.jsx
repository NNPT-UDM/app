import React from "react";
import funfact1 from "../../../../assets/images/icons/funfact1.webp";
import funfact2 from "../../../../assets/images/icons/funfact2.webp";
import funfact3 from "../../../../assets/images/icons/funfact3.webp";
export default function FunfactArea() {
  return (
    <div>
      <section className="funfact-area section-space">
        <div className="container">
          <div className="row mb-n6">
            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="funfact-item">
                <div className="icon">
                  <img src={funfact1} width={110} height={110} alt="Icon" />
                </div>
                <h2 className="funfact-number">5000+</h2>
                <h6 className="funfact-title">Clients</h6>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="funfact-item">
                <div className="icon">
                  <img src={funfact1} height={110} alt="Icon" />
                </div>
                <h2 className="funfact-number">250+</h2>
                <h6 className="funfact-title">Projects</h6>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="funfact-item">
                <div className="icon">
                  <img src={funfact3} width={110} height={110} alt="Icon" />
                </div>
                <h2 className="funfact-number">1.5M+</h2>
                <h6 className="funfact-title">Revenue</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
