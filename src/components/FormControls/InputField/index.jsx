import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { idInput, form, name, label, disable } = props;
  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <>
          <div className="form-group">
            <label className="form-label">{label} </label>
            <input
              name={name}
              defaultValue={value}
              disabled={disable}
              onChange={onChange}
              className="form-control"
            />
            <div className="invalid-feedback d-block">{error?.message}</div>
          </div>
        </>
      )}
    ></Controller>
  );
}

export default InputField;
