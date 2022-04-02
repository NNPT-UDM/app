import React from "react";
import CategoryArea from "../../../../components/CategoryArea";
import useScript from "../../../../hooks/useScript";
import BannerArea from "../../components/BannerArea";
import BlogArea from "../../components/BlogArea";
import Carousel from "../../components/Carousel";
import NewsLetter from "../../components/NewsLetter";
import ProductArea from "../../components/ProductArea";
export default function HomeFeature() {
  useScript();
  return (
    <>
      <Carousel />
      <CategoryArea />
      <ProductArea />
      <BannerArea />
      <BlogArea />
      <NewsLetter />
    </>
  );
}
