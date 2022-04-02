import React from "react";
import { Link } from "react-router-dom";

export default function HeaderArea() {
  return (
    <section
      className="page-header-area pt-10 pb-9"
      style={{ backgroundColor: "#FFF3DA" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="page-header-st3-content text-center text-md-start">
              <ol className="breadcrumb justify-content-center justify-content-md-start">
                <li className="breadcrumb-item">
                  <link className="text-dark" to="/" />
                  Home
                </li>
                <li
                  className="breadcrumb-item active text-dark"
                  aria-current="page"
                >
                  Product Detail
                </li>
              </ol>
              <h2 className="page-header-title">Product Detail</h2>
            </div>
          </div>
          <div className="col-md-7">
            <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">
              Showing Single Product
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
