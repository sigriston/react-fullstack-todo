import React from 'react';
import classNames from 'classnames';
import './index.css';

const Spinner = ({ loading }) => {
  const classes = classNames({
    spinner: true,
    loading
  });

  return (
    <div>
      <div className={classes}>
      </div>
    </div>
  )
};

export default Spinner;
