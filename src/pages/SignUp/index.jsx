import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../assets/images/bg-1.png';
import Feature4 from '../../assets/images/img-4.png';
import LogoDark from '../../assets/images/logo.webp';
import AuthShare from '../../components/AuthShare';
import SignUpForm from './components/SignUpForm';
export default function SignUp() {
  const isLogin = Cookies.get(StorageKeys.TOKEN) ? true : false;
  if (isLogin) {
    return <Redirect to="/" />;
  }
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <AuthShare>
      <div className="text-center mt-3">
        <Link to="#">
          <img src={LogoDark} alt="" height="22" />
        </Link>
        <p className="text-muted mt-3">Sign Up</p>
      </div>
      <div className="p-3 custom-form">
        <SignUpForm onSubmit={handleSubmit} />
      </div>
    </AuthShare>
  );
}
