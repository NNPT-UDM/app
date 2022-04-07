import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disable, item } = props;
  const { control, setValue } = form;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <>
            <div className="product-details-pro-qty">
              <div className="pro-qty">
                <input
                  name={name}
                  value={value}
                  disabled={disable}
                  onChange={(e) => onChange(parseInt(e.target.value))}
                  onBlur={onBlur}
                />
                <div
                  className="dec qty-btn"
                  onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                >
                  -
                </div>
                <div
                  className="inc qty-btn"
                  onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                >
                  +
                </div>
              </div>
              <div className="invalid-feedback d-block">{error?.message}</div>
            </div>
          </>
        )}
      ></Controller>
    </>
  );
}

export default QuantityField;
