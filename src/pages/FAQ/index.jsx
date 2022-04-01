import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderArea from "./components/HeaderArea";
import FAQArea from "./components/FAQArea";
export default function FAQ() {
  return (
    <>
      {" "}
      <Header />
      <div className="main-content">
        <HeaderArea />
        <FAQArea />
      </div>
      <Footer />
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
