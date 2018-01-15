import todos from './todos';
import visibilityFilter from './visibilityFilter';
import loading from './loading';
import error from './error';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  visibilityFilter,
  loading,
  error
});
