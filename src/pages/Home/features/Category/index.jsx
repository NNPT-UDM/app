import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import CategoryArea from '../../../../components/CategoryArea';
import HeaderAreaBig from '../../../../components/HeaderAreaBig';
import useCategory from '../../hooks/useCategory';
import BannerArea from './components/BannerArea';
import FilterArea from './components/FilterArea';
import ListProduct from './components/ListProduct';
export default function CategoryFeature() {
  const {
    params: { categoryId },
  } = useRouteMatch();
  const dispatch = useDispatch();
  const { listProduct, loading } = useCategory(categoryId);
  return (
    <>
      <HeaderAreaBig breadcrumb="Products" title="All Product" />
      <CategoryArea />
      <FilterArea />
      <ListProduct listProduct={listProduct} loading={loading} />
      <BannerArea />
    </>
  );
}
