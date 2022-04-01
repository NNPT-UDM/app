import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderAbout from "./components/HeaderAbout";
import FunfactArea from "./components/FunfactArea";
import BrandLogoArea from "./components/BrandLogoArea";
import AboutArea from "./components/AboutArea";
import FeatureArea from "./components/FeatureArea";
export default function About() {
  return (
    <>
      <Header />
      <div className="main-content">
        <HeaderAbout />
        <FunfactArea />
        <BrandLogoArea />
        <AboutArea />
        <FeatureArea />
      </div>
      <Footer />
    </>
  );
}
