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
    case "ADD_EXPERIMENTS_ACTION":
      return Object.assign({}, state, {
        all: state.all
          ? state.all.concat(action.experiments)
          : action.experiments
      });
    case "SAVE_EXPERIMENT_ACTION":
      state.all.push(action.experiment);
      if (state.all.indexOf(action.experiment) !== -1) {
        state.all.splice(state.all.indexOf(action.experiment), 1);
      }
      return Object.assign({}, state, {
        all: state.all
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
