import React, { Component } from 'react';
import './index.css';
import TitleBar from '../TitleBar';
import InputBar from '../../containers/InputBar';
import TodoList from '../../containers/TodoList';
import VisibilityFilter from '../VisibilityFilter';
import { ACTIVE } from '../../constants/visibilityFilterTypes';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar />
        <TodoList />
        <VisibilityFilter filter={ACTIVE} onFilterChange={(f) => alert(`NEW FILTER: ${f}`)}/>
      </div>
    );
  }
}

export default App;
