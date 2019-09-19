const createIncrement = (amount = 1) => {
  return {
    type: 'INCREMENT',
    payload: amount,
  };
};

const createDecrement = (amount = 1) => {
  return {
    type: 'DECREMENT',
    payload: amount,
  };
};

const createReset = () => {
  return {
    type: 'RESET',
  };
};

export {createIncrement, createDecrement, createReset};
