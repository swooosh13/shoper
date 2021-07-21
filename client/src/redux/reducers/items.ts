import * as actions from "../actions/items";
import { InferValueTypes, ItemType, Nullable } from "../types";

const initialState = {
  items: [] as Array<ItemType>,
  itemProfile: null as Nullable<ItemType>,
  isLoaded: false,
};

type StateType = typeof initialState;
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const items = (
  state: StateType = initialState,
  action: ActionTypes
): StateType => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload, isLoaded: true };
    case "SET_LOADED":
      return { ...state, isLoaded: action.payload };
    case "SET_ITEM_PROFILE":
      return { ...state, itemProfile: action.payload };
    default:
      return state;
  }
};
