import React, { Component } from 'react';
import './index.css';
import TitleBar from '../TitleBar';
import InputBar from '../InputBar';
import TodoList from '../TodoList';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar addTodo={(description) => alert(`TODO ADDED: ${description}`)} />
        <TodoList todos={[ { description: 'Buy milk', id: 1 }, { description: 'Buy oranges', completed: true, id: 2 } ]} />
      </div>
    );
  }
}

export default App;
