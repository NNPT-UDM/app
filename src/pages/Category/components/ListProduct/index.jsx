import React from "react";
import ProductItem from "../../../../components/ProductItem";

export default function ListProduct() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
          {/*== Start Product Item ==*/}
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <div className="col-12">
            <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-0 mb-sm-10">
              <li className="page-item">
                <a
                  className="page-link previous"
                  href="product.html"
                  aria-label="Previous"
                >
                  <span className="fa fa-chevron-left" aria-hidden="true" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="product.html">
                  01
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="product.html">
                  02
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="product.html">
                  03
                </a>
              </li>

              <li className="page-item">
                <a className="page-link next" aria-label="Next">
                  <span className="fa fa-chevron-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
