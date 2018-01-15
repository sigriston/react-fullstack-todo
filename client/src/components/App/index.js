import React, { Component } from 'react';
import './index.css';
import TitleBar from '../TitleBar';
import InputBar from '../../containers/InputBar';
import TodoList from '../../containers/TodoList';
import VisibilityFilter from '../../containers/VisibilityFilter';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar />
        <TodoList />
        <VisibilityFilter />
      </div>
    );
  }
}

export default App;
