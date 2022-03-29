import React from "react";
import PropTypes from "prop-types";

Carousel.propTypes = {};

function Carousel(props) {
  return (
    <section class="hero-slider-area position-relative">
      <div class="swiper hero-slider-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide hero-slide-item">
            <div class="container">
              <div class="row align-items-center position-relative">
                <div class="col-12 col-md-6">
                  <div class="hero-slide-content">
                    <div class="hero-slide-text-img">
                      <img
                        src="assets/images/slider/text-theme.webp"
                        width="427"
                        height="232"
                        alt="Image"
                      />
                    </div>
                    <h2 class="hero-slide-title">CLEAN FRESH</h2>
                    <p class="hero-slide-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis.
                    </p>
                    <a class="btn btn-border-dark" href="product.html">
                      BUY NOW
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="hero-slide-thumb">
                    <img
                      src="assets/images/slider/slider1.webp"
                      width="841"
                      height="832"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-slide-text-shape">
              <img
                src="assets/images/slider/text1.webp"
                width="70"
                height="955"
                alt="Image"
              />
            </div>
            <div class="hero-slide-social-shape"></div>
          </div>
          <div class="swiper-slide hero-slide-item">
            <div class="container">
              <div class="row align-items-center position-relative">
                <div class="col-12 col-md-6">
                  <div class="hero-slide-content">
                    <div class="hero-slide-text-img">
                      <img
                        src="assets/images/slider/text-theme.webp"
                        width="427"
                        height="232"
                        alt="Image"
                      />
                    </div>
                    <h2 class="hero-slide-title">Facial Cream</h2>
                    <p class="hero-slide-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis.
                    </p>
                    <a class="btn btn-border-dark" href="product.html">
                      BUY NOW
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="hero-slide-thumb">
                    <img
                      src="assets/images/slider/slider2.webp"
                      width="841"
                      height="832"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-slide-text-shape">
              <img
                src="assets/images/slider/text1.webp"
                width="70"
                height="955"
                alt="Image"
              />
            </div>
            <div class="hero-slide-social-shape"></div>
          </div>
        </div>

        <div class="hero-slider-pagination"></div>
      </div>
      <div class="hero-slide-social-media">
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
          <i class="fa fa-pinterest-p"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">
          <i class="fa fa-facebook"></i>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
