const experiments = (state = {}, action) => {
  switch (action.type) {
    case "SET_CREATING_ACTION":
      return Object.assign({}, state, {
        creating: true
      });
    case "CLEAR_CREATING_ACTION":
      return Object.assign({}, state, {
        creating: false
      });
    case "SET_EXPERIMENTS_ACTION":
      return Object.assign({}, state, {
        all: action.experiments
      });
    case "SELECT_EXPERIMENT_ACTION":
      return Object.assign({}, state, {
        selected: action.selected
      });
    case "CLEAR_EXPERIMENT_SELECTION_ACTION":
      return Object.assign({}, state, {
        selected: []
      });
    default:
      return state;
  }
};

export default experiments;
