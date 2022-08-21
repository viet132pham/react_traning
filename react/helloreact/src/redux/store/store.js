import { combineReducers } from "redux";

import reducer from "../reducer/reducer.js";

const allReducers = combineReducers({
  reducer,
  // add more reducers here
});

export default allReducers;