import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderArea from "./components/HeaderArea";
import FilterArea from "./components/FilterArea";
import ListProduct from "./components/ListProduct";
import BannerArea from "./components/BannerArea";
export default function Category() {
  return (
    <>
      <Header />
      <div className="main-content">
        <HeaderArea />
        <FilterArea />
        <ListProduct />
        <BannerArea />
      </div>
      <Footer />
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
