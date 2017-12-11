import React from 'react';
import './index.css';
import VisibilityFilterButton from '../VisibilityFilterButton';
import { ALL, ACTIVE, COMPLETED } from '../../constants/visibilityFilterTypes';

const VisibilityFilter = ({ filter, onFilterChange }) => (
  <div id="visibility-filter" className="visibility-filter">
    <label>Display:</label>
    <div id="visibility-filter-control-group" className="button-group">
      <VisibilityFilterButton type={ALL} filter={filter} onFilterChange={onFilterChange} />
      <VisibilityFilterButton type={ACTIVE} filter={filter} onFilterChange={onFilterChange} />
      <VisibilityFilterButton type={COMPLETED} filter={filter} onFilterChange={onFilterChange} />
    </div>
  </div>
);

export default VisibilityFilter;
