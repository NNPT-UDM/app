import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Footer from '../../../../components/Footer';
import TopLinearProgress from '../../../../components/TopLinearProgress';
import useProductDetail from '../../hooks/useProductDetail';
import { addToCart } from '../Cart/cartSlice';
import BannerArea from './components/BannerArea';
import Detail from './components/Detail';
import HeaderArea from './components/HeaderArea';
import RelatedProducts from './components/RelatedProducts';
import Review from './components/Review';

export default function ProductDetailFeature() {
  const {
    params: { productId },
  } = useRouteMatch();
  const dispatch = useDispatch();
  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return <TopLinearProgress />;
  }
  console.log(product);
  const handleSubmit = (values) => {
    const action = addToCart(values);
    dispatch(action);
  };
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <HeaderArea />
          <section className="section-space">
            <div className="container">
              <Detail onSubmit={handleSubmit} product={product} />
              <Review />
            </div>
          </section>
          <BannerArea />
          <RelatedProducts />
          <Footer />
        </>
      )}
    </>
  );
}
