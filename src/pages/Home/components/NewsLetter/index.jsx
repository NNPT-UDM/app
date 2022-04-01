import React from "react";
import NewsLetterImg from "../../../../assets/images/photos/bg1.webp";

export default function NewsLetter() {
  return (
    <section className="section-space pt-0">
      <div className="container">
        <div className="newsletter-content-wrap" data-bg-img={NewsLetterImg}>
          <div className="newsletter-content">
            <div className="section-title mb-0">
              <h2 className="title">Join with us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </p>
            </div>
          </div>
          <div className="newsletter-form">
            <form>
              <input
                type="email"
                className="form-control"
                placeholder="enter your email"
              />
              <button className="btn-submit" type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
