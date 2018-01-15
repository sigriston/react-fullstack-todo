import Immutable from 'immutable';
import typeToReducer from 'type-to-reducer';
import { FULFILLED } from 'redux-promise-middleware';
import {
  GET_TODOS,
  ADD_TODO
} from '../constants/todosActionTypes';

const todosReducer = typeToReducer({
  [GET_TODOS]: {
    [FULFILLED]: (_, action) => Immutable.fromJS(action.payload)
  },
  [ADD_TODO]: {
    [FULFILLED]: (state, action) => state.push(Immutable.fromJS(action.payload))
  }
}, Immutable.List());

export default todosReducer;
