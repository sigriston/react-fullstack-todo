import React from 'react';
import ErrorBanner from '../../containers/ErrorBanner';
import Spinner from '../../containers/Spinner';

const TitleBar = () => (
  <div className="title-row">
    <div className="title">
      <h2>Todo App</h2>
    </div>
    <ErrorBanner />
    <Spinner />
  </div>
);

export default TitleBar;
