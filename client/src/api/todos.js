import axios from 'axios';

export const getTodos = () => (
  axios.get('/api/todos')
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
