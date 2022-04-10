import { yupResolver } from '@hookform/resolvers/yup';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import InputField from '../../../../../../components/FormControls/InputField';
import CheckoutItem from '../CheckoutItem';

import addressApi from '../../../../../../api/addressApi';
import SelectAddress from '../SelectProvince';
import TopLinearProgress from '../../../../../../components/TopLinearProgress';
OrderForm.propTypes = {};

function OrderForm(props) {
  const { cartItems = [] } = useSelector((state) => state.cart);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  // const [provinces, setProvinces] = useState([]);
  const schema = yup.object().shape({
    full_name: yup.string().required('Please enter name'),
    email: yup.string().required('Please enter email').email('Email invalidate'),
    phone: yup.string().required('Please enter phone'),
    description: yup.string().required('Please choose address'),
    province: yup.string().required('Please choose address province'),
    district: yup.string().required('Please choose address district'),
    ward: yup.string().required('Please choose address ward'),
  });
  const form = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      description: '',
      province: '',
      district: '',
      ward: '',
    },
    resolver: yupResolver(schema),
  });
  // api call Provinces;
  useEffect(() => {
    (async () => {
      try {
        const result = await addressApi.getProvinces();
        setProvinces(result);
      } catch (error) {
        toast.success(error.message);
      }
      setLoading(false);
    })();
  }, []);
  const province = form.watch('province');
  const district = form.watch('district');
  const ward = form.watch('ward');

  useEffect(() => {
    (async () => {
      if (province) {
        if (district) {
          form.setValue('district', '');
          setDistricts([]);
          form.setValue('ward', '');
          setWards([]);
        }
        try {
          const result = await addressApi.getDistricts(province);

          setDistricts(result.districts);
        } catch (error) {
          toast.success(error.message);
        }
      }
    })();
  }, [province]);

  useEffect(() => {
    (async () => {
      if (district) {
        if (ward) {
          form.setValue('ward', '');
          setWards([]);
        }
        try {
          const result = await addressApi.getWards(district);

          setWards(result.wards);
        } catch (error) {
          toast.success(error.message);
        }
      }
    })();
  }, [district]);

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }
  };
  //   const { isSubmitting } = form.formState;
  return (
    <>
      {!loading ? (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="row">
            <div className="col-12 col-md-7">
              <InputField name="full_name" label="Name" form={form} />
              <InputField name="email" label="Email" form={form} />
              <InputField name="phone" label="Phone" form={form} />
              <InputField name="description" label="Address" form={form} />
              <SelectAddress name="province" codeValues={provinces} label="Province" form={form} />
              <SelectAddress name="district" codeValues={districts} label="District" form={form} />
              <SelectAddress name="ward" codeValues={wards} label="Ward" form={form} />
            </div>
            <div className="col-12 col-md-5">
              <div className="">
                {cartItems?.map((item, index) => {
                  return <CheckoutItem item={item} key={item.products} />;
                })}
              </div>
              <div className="py-1">
                <button type="submit" className="btn w-100 rounded">
                  Order
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default OrderForm;
