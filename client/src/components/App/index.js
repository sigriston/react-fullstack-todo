import React, { Component } from 'react';
import './index.css';
import TitleBar from '../TitleBar';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
      </div>
    );
  }
}

export default App;
