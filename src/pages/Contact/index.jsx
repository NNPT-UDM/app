import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactArea from "./components/ContactArea";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="main-content">
        <ContactArea />
        <ContactInfo />
        <ContactMap />
      </div>
      <Footer />
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
