import * as api from '../api/todos';
import {
  GET_TODOS,
  ADD_TODO,
  TOGGLE_TODO
} from '../constants/todosActionTypes';

export const getTodos = (filter) => ({
  type: GET_TODOS,
  payload: api.getTodos(filter)
});

export const addTodo = (description) => ({
  type: ADD_TODO,
  payload: api.addTodo({ description })
});

export const toggleTodo = (todo) => {
  const newCompleted = !todo.get('completed');
  const newTodo = todo.set('completed', newCompleted);

  return {
    type: TOGGLE_TODO,
    payload: api.setTodo(newTodo.toJS())
  };
};
