import classNames from 'classnames';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import productApi from '../../../../api/productApi';
import CategoryArea from '../../../../components/CategoryArea';
import useScript from '../../../../hooks/useScript';
import BannerArea from '../../components/BannerArea';
import BlogArea from '../../components/BlogArea';
import Carousel from '../../components/Carousel';
import NewsLetter from '../../components/NewsLetter';
import ProductArea from '../../components/ProductArea';
import useListProduct from '../../hooks/useListProduct';
export default function HomeFeature() {
  console.log('home ren');
  useScript();
  const { listProduct, loading } = useListProduct();

  return (
    <>
      <Carousel />
      <div className={loading ? 'loading-skeleton' : ''}>
        <CategoryArea />
        <ProductArea listProduct={listProduct} />
        <BannerArea />
        <BlogArea />
        <NewsLetter />
      </div>
    </>
  );
}
