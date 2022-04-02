import { yupResolver } from '@hookform/resolvers/yup';

import InputField from 'components/form-controls/InputField';

import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import CheckoutItem from '../CheckoutItem';
import SelectAddress from '../SelectProvince';

OrderForm.propTypes = {};

function OrderForm(props) {
  const { cartItems = [] } = useSelector((state) => state.cart);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  // const [provinces, setProvinces] = useState([]);
  const schema = yup.object().shape({
    full_name: yup.string().required('Vui lòng nhập tên'),
    email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập email đúng định dạng.'),
    phone: yup.string().required('Vui lòng nhâp số điện thoại'),
    description: yup.string().required('Vui lòng nhập địa chỉ'),
    province: yup.string().required('Vui lòng chọn Thành Phố/Tỉnh'),
    district: yup.string().required('Vui lòng chọ Quận/Huyện'),
    ward: yup.string().required('Vui lòng chọn Phường/Xã'),
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
      note: '',
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
        enqueueSnackbar(error.message, { variant: 'error' });
      }
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
          enqueueSnackbar(error.message, { variant: 'error' });
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
          enqueueSnackbar(error.message, { variant: 'error' });
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
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="row" style={{ gap: '10px' }}>
          <div className="col-12 col-md-7">
            <InputField name="full_name" label="Tên" form={form} />
            <InputField name="email" label="Email" form={form} />
            <InputField name="phone" label="Số điện thoại" form={form} />
            <InputField name="description" label="Địa chỉ" form={form} />
            <SelectAddress name="province" codeValues={provinces} label="Thành Phố/Tỉnh" form={form} />
            <SelectAddress name="district" codeValues={districts} label="Quận/Huyện" form={form} />
            <SelectAddress name="ward" codeValues={wards} label="Phường/Xã" form={form} />
          </div>
          <div className="col-12 col-md-5">
            <div style={{ maxHeight: '700px', overflowY: 'scroll' }}>
              {cartItems.map((item, index) => {
                return <CheckoutItem item={item} key={index} />;
              })}
            </div>
            <div className="py-1">
              <button className="btn  w-100" type="submit">
                Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default OrderForm;
