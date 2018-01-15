import typeToReducer from 'type-to-reducer';
import { GET_TODOS } from '../constants/todosActionTypes';
import { FULFILLED } from 'redux-promise-middleware';

const todosReducer = typeToReducer({
  [GET_TODOS]: {
    [FULFILLED]: (_, action) => action.payload
  }
}, []);

export default todosReducer;
