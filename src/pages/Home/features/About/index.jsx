import React from "react";
import useScript from "../../../../hooks/useScript";
import AboutArea from "./components/AboutArea";
import BrandLogoArea from "./components/BrandLogoArea";
import FeatureArea from "./components/FeatureArea";
import FunfactArea from "./components/FunfactArea";
import HeaderAbout from "./components/HeaderAbout";
export default function AboutFeature() {
  useScript();
  return (
    <>
      <HeaderAbout />
      <FunfactArea />
      <BrandLogoArea />
      <AboutArea />
      <FeatureArea />
    </>
  );
}
