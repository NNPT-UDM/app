import React from 'react';
import PropTypes from 'prop-types';

TopLinearProgress.propTypes = {};

function TopLinearProgress(props) {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(50%,50%)' }}>
      <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default TopLinearProgress;
