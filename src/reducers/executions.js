const executions = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_EXECUTION_ACTION':
      return Object.assign({}, state, {
        selected: action.selected
      })
    default:
      return state
  }
}

export default executions
