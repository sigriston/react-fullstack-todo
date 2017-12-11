import React from 'react';
import classNames from 'classnames';

const VisibilityFilterButton = ({ type, filter, onFilterChange }) => {
  const classes = classNames({
    'visibility-filter-button': true,
    active: type === filter
  });
  const typeLower = type.toLowerCase();

  return (
    <button
      id={`visibility-filter-button-${typeLower}`}
      className={classes}
      onClick={() => onFilterChange(type)}>
      {typeLower}
    </button>
  );
};

export default VisibilityFilterButton;
