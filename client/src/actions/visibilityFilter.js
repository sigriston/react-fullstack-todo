import {
  SET_VISIBILITY_FILTER
} from '../constants/visibilityFilterActionTypes';
import { getTodos } from './todos';

export const setVisibilityFilter = (filter) => (dispatch) =>
  dispatch(getTodos(filter))
    .then(dispatch({
      type: SET_VISIBILITY_FILTER,
      payload: filter
    }));
