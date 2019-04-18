const access = (state = { passed: false }, action) => {
  switch (action.type) {
    case "SET_PASSED":
      return Object.assign({}, state, {
        passed: true
      });
    default:
      return state;
  }
};

export default access;
