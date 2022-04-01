import React from "react";
import Feature4 from "../../assets/images/img-4.png";
import LogoDark from "../../assets/images/logo.webp";
import Background from "../../assets/images/bg-1.png";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import AuthShare from "../../components/AuthShare";
export default function ForgotPassword() {
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <>
      <AuthShare>
        <div className="text-center mt-3">
          <Link to="#">
            <img src={LogoDark} alt="" height="22" />
          </Link>
          <p className="text-muted mt-3">Reset Password</p>
        </div>
        <div className="p-3 custom-form">
          <div
            className="alert alert-success bg-soft-primary text-success border-0 text-center"
            role="alert"
          >
            Enter your email address and we'll send you an email with
            instructions to reset your password.
          </div>
          <ForgotPasswordForm onSubmit={handleSubmit} />
        </div>
      </AuthShare>
    </>
  );
}
