const user = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_ACTION":
      return Object.assign({}, state, {
        user: action.user
      });
    case "CLEAR_USER_ACTION":
      return Object.assign({}, state, {
        user: null
      });
    default:
      return state;
  }
};

export default user;
