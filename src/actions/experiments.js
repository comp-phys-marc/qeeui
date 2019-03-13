export const clearCreating = () => ({
  type: "CLEAR_CREATING_ACTION"
});

export const setCreating = () => ({
  type: "SET_CREATING_ACTION"
});

export const saveExperiment = experiment => ({
  type: "SAVE_EXPERIMENT_ACTION",
  experiment
});

export const addExperiments = experiments => ({
  type: "ADD_EXPERIMENTS_ACTION",
  experiments
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
