import axios from 'axios';
import { ALL, ACTIVE, COMPLETED } from '../constants/visibilityFilterTypes';

const buildVisibilityQuery = (completed) => {
  const query = { where: { completed } };
  const strQuery = encodeURIComponent(JSON.stringify(query));
  return `?filter=${strQuery}`;
};

const visibilityQuery = {
  [ALL]: '',
  [ACTIVE]: buildVisibilityQuery(false),
  [COMPLETED]: buildVisibilityQuery(true)
};

export const getTodos = (filter = ALL) => (
  axios.get(`/api/todos${visibilityQuery[filter]}`)
    .then(res => res.data)
);

export const addTodo = (todo) => (
  axios.post('/api/todos', todo)
    .then(res => res.data)
);

export const setTodo = (todo) => (
  axios.put(`/api/todos/${todo.id}`, todo)
    .then(res => res.data)
);
