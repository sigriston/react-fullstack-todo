import * as api from '../api/todos';
import { GET_TODOS } from '../constants/todosActionTypes';

export const getTodos = () => ({
  type: GET_TODOS,
  payload: api.getTodos()
});
