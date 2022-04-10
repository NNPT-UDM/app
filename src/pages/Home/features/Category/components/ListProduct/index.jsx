import classNames from 'classnames';
import React from 'react';
import ProductItem from '../../../../../../components/ProductItem';

export default React.memo(function ListProduct({ listProduct = [], loading }) {
  console.log(listProduct);
  return (
    <section className="section-space">
      <div
        className={classNames(
          {
            'loading-skeleton': loading,
          },

          'container'
        )}
      >
        <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
          {listProduct.length ? (
            listProduct.map((item) => {
              return <ProductItem key={item.id} product={item} />;
            })
          ) : loading ? (
            <>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </>
          ) : (
            <></>
          )}
          {listProduct.length ? (
            <div className="col-12">
              <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-0 mb-sm-10">
                <li className="page-item">
                  <a className="page-link previous" href="product.html" aria-label="Previous">
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
          ) : (
            <h2 className="text-center">No Products</h2>
          )}
        </div>
      </div>
    </section>
  );
});
