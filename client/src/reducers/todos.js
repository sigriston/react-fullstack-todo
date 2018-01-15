import { GET_TODOS } from '../constants/todosActionTypes';
import { FULFILLED } from 'redux-promise-middleware';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_TODOS}_${FULFILLED}`:
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
