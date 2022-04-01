import React from "react";
import { Link } from "react-router-dom";

import Feature4 from "../../assets/images/img-4.png";
import LogoDark from "../../assets/images/logo.webp";
import "./styles.css";
import "../../assets/images/bg-1.png";
import Background from "../../assets/images/bg-1.png";
import LoginForm from "./components/LoginForm";
import AuthShare from "../../components/AuthShare";
export default function Login() {
  const handleSubmit = async (values) => {
    console.log(values);
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
