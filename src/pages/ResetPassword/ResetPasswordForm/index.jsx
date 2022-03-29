import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
import PasswordField from 'components/form-controls/PasswordField';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/InputField';
import './styles.scss';

function ResetPasswordForm(props) {
  ResetPasswordForm.propTypes = {};
  const schema = yup.object().shape({
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
    <Card sx={{ borderRadius: '10px', padding: '10px' }}>
      <CardContent>
        {/* <Typography className="text" align="center" variant="h6" component="div">
          Password will be sent to your email address
        </Typography> */}
        <form className="form-forgot" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="m-1">
            <PasswordField name="password" label="Your new password" form={form} />
            <PasswordField name="password_confirm" label="Confirm password" form={form} />
          </div>
          <Divider />
          <LoadingButton
            className="btn "
            sx={{ mt: 5, p: '0.5rem 1.75rem' }}
            loading={isSubmitting}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Confirm
          </LoadingButton>
        </form>
      </CardContent>
    </Card>
  );
}

export default ResetPasswordForm;
