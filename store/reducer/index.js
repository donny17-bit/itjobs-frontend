import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import company from "./company";

export default combineReducers({
  auth,
  user,
  company,
});
