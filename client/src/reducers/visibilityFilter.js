import {
  SET_VISIBILITY_FILTER
} from '../constants/visibilityFilterActionTypes';
import { ALL } from '../constants/visibilityFilterTypes';

const visibilityFilterReducer = (state = ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
