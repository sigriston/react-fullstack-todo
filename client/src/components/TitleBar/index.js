import React from 'react';
import Spinner from '../Spinner';

const TitleBar = () => (
  <div className="title-row">
    <div className="title">
      <h2>Todo App</h2>
    </div>
    <Spinner loading={false} />
  </div>
);

export default TitleBar;
