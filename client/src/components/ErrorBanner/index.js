import React from 'react';
import classNames from 'classnames';
import './index.css';

const ErrorBanner = ({ error, clearError }) => {
  const classes = classNames({
    'error-banner': true,
    'has-error': !!error
  });

  return (
    <div className={classes}>
      <span className="icon-warning">&#x26a0;</span>
      <span className="error-text">{error}</span>
      <span className="close-button" onClick={clearError}>&times;</span>
    </div>
  )
};

export default ErrorBanner;
