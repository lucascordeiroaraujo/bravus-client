import { combineReducers } from "redux";

import indexReducer from "./index/reducer";

const rootReducer = combineReducers({
  index: indexReducer
});

export default rootReducer;
