import React from "react";
import useScript from "../../../../hooks/useScript";
import ContactArea from "./components/ContactArea";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";
export default function ContactFeature() {
  useScript();
  return (
    <>
      <ContactArea />
      <ContactInfo />
      <ContactMap />
    </>
  );
}
