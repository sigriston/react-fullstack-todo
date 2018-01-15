const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
