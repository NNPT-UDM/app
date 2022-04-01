import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/FormControls/InputField";
import InputFieldPassword from "../../../../components/FormControls/InputFieldPassword";
yup.addMethod(yup.string, "strongPassword", strongPasswordMethod);

function strongPasswordMethod() {
  return this.test("strongPasswordTest", function (value) {
    const { path, createError } = this;
    switch (Boolean(value)) {
      case !/^(?=.*[a-z])/.test(value):
        return createError({
          path,
          message: "Password must include lowercase letter",
        });
      case !/^(?=.*[A-Z])/.test(value):
        return createError({
          path,
          message: "Password must include uppercase letter",
        });
      case !/^(?=.*[0-9])/.test(value):
        return createError({ path, message: "Password must include digit" });
      case !/^(?=.*[!@#\$%\^&\*])/.test(value):
        return createError({
          path,
          message: "Password must include special character",
        });
      default:
        return true;
    }
  });
}
export default function SignUpForm(props) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .email("Email invalidate."),
    name: yup.string().required("Please enter name"),
    password: yup
      .string()
      .required("Please enter your new password.")
      .min(8, "Password is 8 characters long.")
      .strongPassword(),
    password_confirm: yup
      .string()
      .required("Please enter your confirm password.")
      .min(8, "Password is 8 characters long.")
      .oneOf(
        [yup.ref("password")],
        "Password and confirm password do not match."
      ),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
      // form.reset(result);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="name" label="Full Name" form={form} />
      <InputField name="email" label="Email address" form={form} />
      <InputFieldPassword name="password" label="Password" form={form} />
      <InputFieldPassword
        name="password_confirm"
        label="Password Confirm"
        form={form}
      />
      <div className="mt-3 text-center">
        <button
          type="submit"
          className="w-100 btn btn-primary btn-block rounded"
        >
          Sign Up
        </button>{" "}
      </div>
      <div className="mt-4 pt-1 mb-0 text-center">
        <Link to="/forgot-password" className="text-dark">
          <i className="mdi mdi-lock"></i> Forgot your password?
        </Link>
      </div>
    </form>
  );
}
