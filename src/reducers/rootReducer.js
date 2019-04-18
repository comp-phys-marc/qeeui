import { combineReducers } from "redux";
import executions from "./executions";
import experiments from "./experiments";
import user from "./user";
import access from "./access";

export default combineReducers({
  executions,
  experiments,
  user,
  access
});
