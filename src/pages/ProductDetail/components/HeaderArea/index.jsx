import React from "react";
import { Link } from "react-router-dom";

export default function HeaderArea() {
  return (
    <section
      class="page-header-area pt-10 pb-9"
      style={{ backgroundColor: "##FFF3DA" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="page-header-st3-content text-center text-md-start">
              <ol class="breadcrumb justify-content-center justify-content-md-start">
                <li class="breadcrumb-item">
                  <Link class="text-dark" to="/">
                    Home
                  </Link>
                </li>
                <li
                  class="breadcrumb-item active text-dark"
                  aria-current="page"
                >
                  Product Detail
                </li>
              </ol>
              <h2 class="page-header-title">Product Detail</h2>
            </div>
          </div>
          <div class="col-md-7">
            <h5 class="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">
              Showing Single Product
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
