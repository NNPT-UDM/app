import React from "react";
import Icon1 from "../../../../../../assets/images/icons/1.webp"
import Icon2 from "../../../../../../assets/images/icons/2.webp"
import Icon3 from "../../../../../../assets/images/icons/3.webp"
export default function ContactInfo() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="contact-info">
          <div className="contact-info-item">
            <img
              className="icon"
              src={Icon1}
              width={30}
              height={30}
              alt="Icon"
            />
            <a href="tel://+11020303023">+11 0203 03023</a>
            <a href="tel://+11020303023">+11 0203 03023</a>
          </div>
          <div className="contact-info-item">
            <img
              className="icon"
              src={Icon2}
              width={30}
              height={30}
              alt="Icon"
            />
            <a href="mailto://example@demo.com">example@demo.com</a>
            <a href="mailto://demo@example.com">demo@example.com</a>
          </div>
          <div className="contact-info-item mb-0">
            <img
              className="icon"
              src={Icon3}
              width={30}
              height={30}
              alt="Icon"
            />
            <p>Sunset Beach, North Carolina(NC), 28468</p>
          </div>
        </div>
      </div>
    </section>
  );
}
