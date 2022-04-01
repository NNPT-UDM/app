import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "./components/Carousel";
import CategoryArea from "../../components/CategoryArea";
import ProductArea from "./components/ProductArea";
import BannerArea from "./components/BannerArea";
import BlogArea from "./components/BlogArea";
import NewsLetter from "./components/NewsLetter";

function Home(props) {
  return (
    <>
      <Header />
      <div className="main-content">
        <Carousel />
        <CategoryArea />
        <ProductArea />
        <BannerArea />
        <BlogArea />
        <NewsLetter />
      </div>
      <Footer />
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}

export default Home;
