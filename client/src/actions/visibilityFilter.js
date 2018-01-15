import {
  SET_VISIBILITY_FILTER
} from '../constants/visibilityFilterActionTypes';

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
});
