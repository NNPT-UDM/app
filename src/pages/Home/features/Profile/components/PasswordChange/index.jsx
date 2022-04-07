import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword } from '../../../../../Login/userSlice';
import PasswordChangeForm from './components/PasswordChangeForm';


export default function PasswordChange() {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const action = changePassword(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      if (user.success === 1) {
        toast.success(user.message);
      } else {
        toast.error('Password Change Fail');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="tab-pane fade" id="password-change" role="tabpanel" aria-labelledby="password-change-tab">
      <div className="myaccount-content">
        <h3>Password change</h3>
        <div className="account-details-form">
          <PasswordChangeForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
