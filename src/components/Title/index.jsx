import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup/lib/locale';

Title.propTypes = {
  value: PropTypes.string,
};

function Title({ value = 'Xa Lộ' }) {
  useEffect(() => {
    document.title = value;
  }, [value]);
  return <></>;
}

export default Title;
