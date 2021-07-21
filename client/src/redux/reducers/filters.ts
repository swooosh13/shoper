import { Nullable, InferValueTypes } from "../types";
import * as actions from "../actions/filters";
import { SortByType } from "../api/api";

const initialState = {
  category: null as Nullable<number>,
  sortBy: {
    type: "popular",
    order: "desc",
  } as SortByType,
};

type StateType = typeof initialState;
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const filters = (state: StateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
