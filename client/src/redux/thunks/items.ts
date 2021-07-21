import { RootStateType } from "../store";
import { itemsAPI } from "../api/api";
import { SortByType } from "../api/api";
import { setItems } from "../actions/items";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../reducers/items";
import * as actions from "../actions/items";
import { Nullable } from "../types";

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;

export const fetchItems = (
  sortBy: SortByType,
  category: Nullable<number>
): ThunkType => (dispatch) => {
  dispatch(actions.setLoaded(false));

  itemsAPI.fetchItems(sortBy, category).then(({ data }) => {
    dispatch(setItems(data));
  });
};

export const getItemProfile = (itemId: number): ThunkType => async (
  dispatch
) => {
  const {data} = await itemsAPI.getItemProfile(itemId);
  dispatch(actions.setItemProfile(data));
};
