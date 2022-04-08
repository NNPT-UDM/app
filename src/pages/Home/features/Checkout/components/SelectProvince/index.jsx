import React from 'react';
import { Controller } from 'react-hook-form';

function SelectAddress(props) {
  const { form, name, label, disable, codeValues = [] } = props;
  // const [size, setSize] = React.useState(sizes[0]);
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <>
          <div className="form-group">
            <label className="form-label">{label} </label>
            <select
              name={name}
              defaultValue={value}
              disabled={disable}
              onChange={onChange}
              className="form-select"
            >
              <option value="">--Please choose {name}--</option>
              {codeValues.map((value) => {
                return (
                  <option key={value.code} value={value.code}>
                    {value.name}
                  </option>
                );
              })}
            </select>
            <div className="invalid-feedback d-block">{error?.message}</div>
          </div>
        </>
      )}
    ></Controller>
  );
}

export default SelectAddress;
