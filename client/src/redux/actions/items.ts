import { ItemType } from "../types";

export const setLoaded = (payload: boolean) => ({
  type: "SET_LOADED",
  payload,
} as const);

export const setItems = (items: ItemType[]) => ({
  type: 'SET_ITEMS',
  payload: items,
} as const);


export const setItemProfile = (item: ItemType) => ({
  type: 'SET_ITEM_PROFILE',
  payload: item
} as const);
