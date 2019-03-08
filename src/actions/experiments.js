export const clearCreating = () => ({
  type: "CLEAR_CREATING_ACTION"
});

export const setCreating = () => ({
  type: "SET_CREATING_ACTION"
});

export const setExperiments = experiments => ({
  type: "SET_EXPERIMENTS_ACTION",
  experiments
});

export const selectExperiment = selected => ({
  type: "SELECT_EXPERIMENT_ACTION",
  selected
});

export const clearExperimentSelection = () => ({
  type: "CLEAR_EXPERIMENT_SELECTION_ACTION"
});
