import { Stack } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import Title from 'components/Title';
import { useSnackbar } from 'notistack';
import HeaderForgot from 'pages/ForgotPassword/components/Header';
import { forgotPassword } from 'pages/Login/userSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ResetPasswordForm from './ResetPasswordForm';
import './styles.scss';
ResetPassword.propTypes = {};

function ResetPassword(props) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const {
    params: { id },
  } = useRouteMatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.checkTokenPassword(id);
        const data = response.data;
        if (data.success === 0) {
          history.push('/');
        }
      } catch (error) {
        history.push('/');
      }
    })();
  }, []);
  const handleSubmit = async (values) => {
    try {
      const response = await userApi.resetPassword(values, id);
      const data = response.data;

      if (data.success !== 1) {
        enqueueSnackbar(data.message, { variant: 'error' });
      } else {
        enqueueSnackbar(data.message, { variant: 'success' });
        setTimeout(() => history.push('/'), 3000);
      }
      // console.log(re);
      // if (user.success !== 1) {
      //   enqueueSnackbar(user.message, { variant: 'error' });
      // }
      // if (user.success === 1) {
      //   enqueueSnackbar(user.message, { variant: 'success' });
      // }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div className="ForgotPassword">
      <Title value="Xalo English - Reset Password" />
      <div>
        <HeaderForgot />
      </div>
      <Stack className="stack-forgot" direction="row" justifyContent="center" alignItems="center">
        <ResetPasswordForm onSubmit={handleSubmit} />
      </Stack>
    </div>
  );
}

export default ResetPassword;
