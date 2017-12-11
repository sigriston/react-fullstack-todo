import React from 'react';
import './index.css';
import Todo from '../Todo';

const TodoList = ({ todos }) => (
  <div id="todo-list" className="todo-list">
    <ul>
      {todos.map((todo, index) =>
        <li key={todo.id}><Todo todo={todo} toggleTodo={({ description }) => alert(`TOGGLED: ${description}`)} /></li>
      )}
    </ul>
  </div>
);

export default TodoList;
