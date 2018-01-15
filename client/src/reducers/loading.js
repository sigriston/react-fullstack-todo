const loadingReducer = (state = 0, action) => {
  if (/PENDING$/.test(action.type)) {
    return state + 1;
  } else if (/(FULFILLED|REJECTED)$/.test(action.type)) {
    return state - 1;
  } else {
    return state;
  }
};

export default loadingReducer;
