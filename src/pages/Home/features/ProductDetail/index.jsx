import React from "react";
import BannerArea from "./components/BannerArea";
import HeaderArea from "./components/HeaderArea";
import RelatedProducts from "./components/RelatedProducts";
import Review from "./components/Review";

import Detail from "./components/Detail";
export default function ProductDetailFeature() {
  return (
    <>
      <HeaderArea />
      <section className="section-space">
        <div className="container">
          <Detail />
          <Review />
        </div>
      </section>
      <BannerArea />
      <RelatedProducts />
    </>
  );
}
