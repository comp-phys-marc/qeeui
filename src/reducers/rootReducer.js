import { combineReducers } from "redux";
import executions from "./executions";
import experiments from "./experiments";
import user from "./user";

export default combineReducers({
  executions,
  experiments,
  user
});
