import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../../../components/FormControls/InputField';
export default function AccountDetail(props) {
  const { display_name = '', email = '' } = props;
  console.log(1);
  const schema = yup.object().shape({
    display_name: yup.string().required('Please enter display name'),
    email: yup.string().required('Please enter email').email('Email invalidate.'),
  });

  const form = useForm({
    defaultValues: useMemo(() => {
      return { display_name, email };
    }, [props]),
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    form.setValue('display_name', display_name);
    form.setValue('email', email);
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
      // form.reset(result);
    }
  };
  return (
    <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
      <div className="myaccount-content">
        <h3>Account Details</h3>
        <div className="account-details-form">
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="display_name" label="Display name" form={form} />
            <InputField name="email" label="Email" form={form} />
            <div className="single-input-item mt-2">
              <button className="check-btn sqr-btn rounded">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
