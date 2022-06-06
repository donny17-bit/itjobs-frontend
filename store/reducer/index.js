import { combineReducers } from "redux";

import auth from "./auth";
import hire from "./hire";
import user from "./user";

export default combineReducers({
  hire,
  auth,
  user,
});
