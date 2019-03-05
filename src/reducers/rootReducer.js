import { combineReducers } from "redux";
import executions from "./executions";
import user from "./user";

export default combineReducers({
  executions,
  user
});
