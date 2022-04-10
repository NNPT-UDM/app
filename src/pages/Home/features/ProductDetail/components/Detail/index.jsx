import React from 'react';
import { STATIC_HOST } from '../../../../../../constants';
import { yupResolver } from '@hookform/resolvers/yup';
import ProductImg from '../../../../../../assets/images/shop/product-details/4.webp';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../../../../components/FormControls/QuantityField';
export default function Detail({ product, onSubmit }) {
  const { description, name, photo, price, category, qty } = product;
  const schema = yup.object().shape({
    qty: yup
      .number()
      .min(1, 'Please enter at least 1')
      .max(qty - 5, `Please enter at biggest ${qty - 5}`)
      .required('Please enter quantity'),
  });

  const form = useForm({
    defaultValues: {
      products: product._id,
      info: product,
      qty: '1',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // console.log(values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <div className="row product-details">
      <div className="col-lg-6">
        <div className="product-details-thumb">
          <img
            src={`${STATIC_HOST}/${photo?.fieldname}/${photo?.filename}` || ProductImg}
            width={570}
            height={693}
            alt="Image"
          />
          <span className="flag-new">new</span>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-details-content">
          <h5 className="product-details-collection">{category?.name}</h5>
          <h3 className="product-details-title">{name}</h3>
          <div className="product-details-review mb-7">
            <div className="product-review-icon">
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-o" />
              <i className="fa fa-star-half-o" />
            </div>
            <button type="button" className="product-review-show">
              150 reviews
            </button>
          </div>
          <p className="mb-7">{description}</p>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="qty" form={form} />
            <div className="product-details-action">
              <h4 className="price">${price?.sell}</h4>
              <div className="product-details-cart-wishlist">
                <button
                  type="button"
                  className="btn-wishlist"
                  data-bs-toggle="modal"
                  data-bs-target="#action-WishlistModal"
                >
                  <i className="fa fa-heart-o" />
                </button>
                <button type="submit" className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
