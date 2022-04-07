import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import InputFieldPassword from '../../../../../../../../components/FormControls/InputFieldPassword';
yup.addMethod(yup.string, 'strongPassword', strongPasswordMethod);

export function strongPasswordMethod() {
  return this.test('strongPasswordTest', function (value) {
    const { path, createError } = this;
    switch (Boolean(value)) {
      case !/^(?=.*[a-z])/.test(value):
        return createError({ path, message: 'Password must include lowercase letter' });
      case !/^(?=.*[A-Z])/.test(value):
        return createError({ path, message: 'Password must include uppercase letter' });
      case !/^(?=.*[0-9])/.test(value):
        return createError({ path, message: 'Password must include digit' });
      case !/^(?=.*[!@#\$%\^&\*])/.test(value):
        return createError({ path, message: 'Password must include special character' });
      default:
        return true;
    }
  });
}
export default function PasswordChangeForm(props) {
  const schema = yup.object().shape({
    password_current: yup
      .string()
      .required('Please enter your old password.')
      .min(8, 'Password is 8 characters long.'),
    password: yup
      .string()
      .required('Please enter your new password.')
      .min(8, 'Password is 8 characters long.')
      .strongPassword(),
    password_confirm: yup
      .string()
      .required('Please enter your confirm password.')
      .min(8, 'Password is 8 characters long.')
      .oneOf([yup.ref('password')], 'Password and confirm password do not match.'),
  });
  const form = useForm({
    defaultValues: {
      password_current: '',
      password: '',
      password_confirm: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <fieldset>
        <div className="">
          <InputFieldPassword name="password_current" label="Your current password" form={form} />
        </div>
        <div className="row">
          <div className="col-6">
            <InputFieldPassword name="password" label="Your new password" form={form} />
          </div>
          <div className="col-6">
            <InputFieldPassword name="password_confirm" label="Confirm password" form={form} />
          </div>
        </div>
      </fieldset>
      <div className="single-input-item mt-2">
        <button className="check-btn rounded">Save Changes</button>
      </div>
    </form>
  );
}
