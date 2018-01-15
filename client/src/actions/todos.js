import * as api from '../api/todos';
import {
  GET_TODOS,
  ADD_TODO
} from '../constants/todosActionTypes';

export const getTodos = () => ({
  type: GET_TODOS,
  payload: api.getTodos()
});

export const addTodo = (description) => ({
  type: ADD_TODO,
  payload: api.addTodo({ description })
});
