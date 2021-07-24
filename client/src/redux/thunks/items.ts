import { AxiosResponse } from "axios";

import { RootStateType } from "../store";
import { itemsAPI } from "../api/api";
import { SortByType } from "../api/api";
import { setItems } from "../actions/items";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../reducers/items";
import * as actions from "../actions/items";
import { ItemType, Nullable } from "../types";

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;

export const fetchItems = (
  sortBy: SortByType,
  category: Nullable<number>
): ThunkType => (dispatch) => {
  dispatch(actions.setLoaded(false));

  itemsAPI.fetchItems(sortBy, category).then((data: ItemType[]) => {
    dispatch(setItems(data));
  });
};

export const getItemProfile = (itemId: number): ThunkType => async (
  dispatch
) => {
  itemsAPI.getItemProfile(itemId).then((data: ItemType) => {
    dispatch(actions.setItemProfile(data));
  });
};
