import React from 'react';
import ErrorBanner from '../ErrorBanner';
import Spinner from '../Spinner';

const TitleBar = () => (
  <div className="title-row">
    <div className="title">
      <h2>Todo App</h2>
    </div>
    <ErrorBanner error="Stuff happened!!!" clearError={() => alert('Error banner closed!')} />
    <Spinner loading={true} />
  </div>
);

export default TitleBar;
