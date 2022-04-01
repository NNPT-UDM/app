import React from "react";
import ContactImg from "../../../../assets/images/photos/contact.webp";
export default function ContactArea() {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="offset-lg-6 col-lg-6">
            <div className="section-title position-relative">
              <h2 className="title">Get in touch</h2>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing aliquam,
                purus sit amet luctus venenatis
              </p>
              <div className="line-left-style mt-4 mb-1" />
            </div>
            {/*== Start Contact Form ==*/}
            <div className="contact-form">
              <form id="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="con_name"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="con_email"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="con_message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-sm w-100 rounded"
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="form-message" />
          </div>
        </div>
      </div>
      <div
        className="contact-left-img"
        data-bg-img={ContactImg}
        style={{ backgroundImage: `url(${ContactImg})` }}
      />
    </section>
  );
}
