import { InferValueTypes, LikedItem, ArrayMap } from "../types";
import * as actions from "../actions/likes";

const initialState = {
  items: {} as ArrayMap<LikedItem>,
  totalPrice: 0,
  totalCount: 0,
};

type StateType = typeof initialState;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const likes = (
  state: StateType = initialState,
  action: ActionTypes
): StateType => {
  switch (action.type) {
    case "ADD_TO_LIKES": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allItems = [].concat.apply([], Object.values(newItems));

      const totalPrice = allItems.reduce(
        (acc: number, item: LikedItem) => acc + item.price,
        0
      );
      const totalCount = allItems.length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "CLEAR_LIKES":
      return { items: {}, totalCount: 0, totalPrice: 0 };
    default:
      return state;
  }
};
