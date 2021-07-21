import { filters } from "./filters";
import { items } from "./items";
import { likes } from "./likes";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters,
  items,
  likes
});

export { rootReducer };
