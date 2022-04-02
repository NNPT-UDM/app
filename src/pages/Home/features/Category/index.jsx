import React from "react";
import HeaderAreaBig from "../../../../components/HeaderAreaBig";
import BannerArea from "./components/BannerArea";
import FilterArea from "./components/FilterArea";
import HeaderArea from "./components/HeaderArea";
import ListProduct from "./components/ListProduct";
export default function CategoryFeature() {
  return (
    <>
      <HeaderAreaBig breadcrumb="Products" title="All Product" />
      <FilterArea />
      <ListProduct />
      <BannerArea />
    </>
  );
}
