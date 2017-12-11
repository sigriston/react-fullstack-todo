import React, { Component } from 'react';
import './index.css';
import TitleBar from '../TitleBar';
import InputBar from '../InputBar';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar addTodo={(description) => alert(`TODO ADDED: ${description}`)} />
      </div>
    );
  }
}

export default App;
