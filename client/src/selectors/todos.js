import { createSelector } from 'reselect';
import { ACTIVE, COMPLETED } from '../constants/visibilityFilterTypes';

const getVisibilityFilter = ({ visibilityFilter }) => visibilityFilter;
const getTodos = ({ todos }) => todos;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case ACTIVE:
        return todos.filter(todo => !todo.get('completed'));
      case COMPLETED:
        return todos.filter(todo => todo.get('completed'));
      default:
        return todos;
    }
  }
);
