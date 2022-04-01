import React from "react";

export default function ProductDetail() {
  return <div>ProductDetail</div>;
}
import React from 'react'
import BannerArea from "./components/BannerArea";
import HeaderArea from "./components/HeaderArea";
import RelatedProducts from "./components/RelatedProducts";
import Review from "./components/Review";

export default function ProductDetail() {
  return (
    <>
    <Header />
    <div className="main-content">
      <section class="section-space">
      <div class="container">
        <HeaderArea/>
        <Review/>
      </div>
      </section>
      <BannerArea/>
      <RelatedProducts/>
    </div>
    <Footer />
  
  </>
  )
}
