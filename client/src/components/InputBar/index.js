import React from 'react';
import './index.css';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { addTodo } = this.props;
    addTodo(this.state.value);
    this.setState({ value: '' });
  }

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div id="input" className="input">
        <input type="text" name="input-todo" id="input-todo" className="input-todo" placeholder="What needs to be done?" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <button id="button-add" className="button-add" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default InputBar;
