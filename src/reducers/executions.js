const executions = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_EXECUTION_ACTION":
      return Object.assign({}, state, {
        selected: action.selected
      });
    case "CLEAR_EXECUTION_SELECTION_ACTION":
      return Object.assign({}, state, {
        selected: []
      });
    default:
      return state;
  }
};

export default executions;
