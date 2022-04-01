import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/images/bg-1.png";
import Feature4 from "../../assets/images/img-4.png";
import LogoDark from "../../assets/images/logo.webp";

export default function AuthShare({ children }) {
  return (
    <>
      <div className="account-home-btn d-none d-sm-block">
        <Link to="/" className="text-primary">
          <i className="mdi mdi-home h1"></i>
        </Link>
      </div>
      <section
        className="bg-account-pages vh-100"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-box">
                    <div className="row align-items-center no-gutters">
                      <div className="col-lg-6">
                        <div className="bg-light">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="home-img login-img text-center d-none d-lg-inline-block">
                                <div className="animation-2"></div>
                                <div className="animation-3"></div>
                                <img
                                  src={Feature4}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row justify-content-center">
                          <div className="col-lg-11">
                            <div className="p-4">{children}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
