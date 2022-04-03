import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../assets/images/bg-1.png';
import LogoDark from '../../assets/images/logo.webp';
import AuthShare from '../../components/AuthShare';
import LoginForm from './components/LoginForm';
import './styles.css';
import { login } from './userSlice';
export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = await unwrapResult(resultAction);
      console.log(user);
      if (user.success !== 1) {
        toast.error(user.message);
      }
      if (user.success === 1) {
        history.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AuthShare>
      <div className="text-center mt-3">
        <Link to="/">
          <img src={LogoDark} alt="" height="22" />
        </Link>
        <p className="text-muted mt-3">Sign in to continue to Brancy.</p>
      </div>
      <div className="p-3 custom-form">
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </AuthShare>
  );
}
