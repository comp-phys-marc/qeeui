export const selectExecution = selected => ({
  type: "SELECT_EXECUTION_ACTION",
  selected
});

export const clearExecutionSelection = () => ({
  type: "CLEAR_EXECUTION_SELECTION_ACTION"
});
