import React from "react";
import PropTypes from "prop-types";
import TextTheme from "../../../../assets/images/slider/text-theme.webp";
import Text1 from "../../../../assets/images/slider/text1.webp";
import Slider1 from "../../../../assets/images/slider/slider1.webp";
import Slider2 from "../../../../assets/images/slider/slider2.webp";

Carousel.propTypes = {};

function Carousel(props) {
  return (
    <section className="hero-slider-area position-relative">
      <div className="swiper hero-slider-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide hero-slide-item">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-slide-content">
                    <div className="hero-slide-text-img">
                      <img
                        src={TextTheme}
                        width="427"
                        height="232"
                        alt="Image"
                      />
                    </div>
                    <h2 className="hero-slide-title">CLEAN FRESH</h2>
                    <p className="hero-slide-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis.
                    </p>
                    <a className="btn btn-border-dark" href="product.html">
                      BUY NOW
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-slide-thumb">
                    <img src={Slider1} width="841" height="832" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-slide-text-shape">
              <img src={Text1} width="70" height="955" alt="Image" />
            </div>
            <div className="hero-slide-social-shape"></div>
          </div>
          <div className="swiper-slide hero-slide-item">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-slide-content">
                    <div className="hero-slide-text-img">
                      <img
                        src={TextTheme}
                        width="427"
                        height="232"
                        alt="Image"
                      />
                    </div>
                    <h2 className="hero-slide-title">Facial Cream</h2>
                    <p className="hero-slide-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis.
                    </p>
                    <a className="btn btn-border-dark" href="product.html">
                      BUY NOW
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-slide-thumb">
                    <img
                      src={Slider2}
                      width="841"
                      height="832"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-slide-text-shape">
              <img
                src={Text1}
                width="70"
                height="955"
                alt="Image"
              />
            </div>
            <div className="hero-slide-social-shape"></div>
          </div>
        </div>

        <div className="hero-slider-pagination"></div>
      </div>
      <div className="hero-slide-social-media">
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
          <i className="fa fa-pinterest-p"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
