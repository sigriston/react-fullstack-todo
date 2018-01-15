import { CLEAR_ERROR } from '../constants/errorActionTypes';

const errorReducer = (state = '', action) => {
  if (action.type === CLEAR_ERROR) {
    return '';
  } else if (/REJECTED$/.test(action.type)) {
    return action.payload.message;
  } else {
    return state;
  }
};

export default errorReducer;
