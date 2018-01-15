import React from 'react';
import './index.css';
import Todo from '../../containers/Todo';

const TodoList = ({ todos }) => (
  <div id="todo-list" className="todo-list">
    <ul>
      {todos.map((todo, index) =>
        <li key={todo.get('id')}><Todo todo={todo} /></li>
      )}
    </ul>
  </div>
);

export default TodoList;
