import todos from './todos';
import visibilityFilter from './visibilityFilter';
import loading from './loading';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  visibilityFilter,
  loading
});
