import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/FormControls/InputField";

function ForgotPasswordForm(props) {
  ForgotPasswordForm.propTypes = {};
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .email("Email invalidate."),
  });

  const form = useForm({
    defaultValues: {
      email: "",
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
      <InputField name="email" label="Email address" form={form} />
      <div className="mt-3">
        <button
          type="submit"
          className="btn btn-primary btn-block rounded w-100"
        >
          Reset your Password
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
