import { combineReducers } from "redux";
import { appointments } from "./appointment";
import { auth } from "./auth";

const rootReducer = combineReducers({
  auth,
  appointments,
});
export default rootReducer;
