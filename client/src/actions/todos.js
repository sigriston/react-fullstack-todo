import * as api from '../api/todos';

export const getTodos = () => ({
  type: 'GET_TODOS',
  payload: api.getTodos()
});
