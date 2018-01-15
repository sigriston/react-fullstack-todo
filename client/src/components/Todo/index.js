import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="todo-item" onClick={this.handleClick}>
        <input type="checkbox" checked={todo.get('completed')} readOnly /> {todo.get('description')}
      </div>
    );
  }

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo);
  }
}

export default Todo;
