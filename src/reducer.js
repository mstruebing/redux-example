const createReducer = initialState => {
  return (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.payload,
        };
      case 'DECREMENT':
        return {
          count: state.count - action.payload,
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };
};

export default createReducer;
