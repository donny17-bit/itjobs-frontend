import { combineReducers } from "redux";

import auth from "./auth";
import hire from "./hire";
import user from "./user";
import company from "./company";

export default combineReducers({
  hire,
  auth,
  user,
  company,
});
