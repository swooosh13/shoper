import { LikedItem } from "../types";

export const addToLikes = (item: LikedItem) => ({
  type: 'ADD_TO_LIKES',
  payload: item
} as const);

export const clearLikes = () => ({
  type: 'CLEAR_LIKES'
} as const);

export const removeLikesItem = (id: number) => ({
  type: 'REMOVE_LIKES_ITEM',
  payload: id
} as const);

export const plusLikesItem = (id: number) => ({
  type: 'PLUS_LIKES_ITEM',
  payload: id
} as const);

export const minusLikesItem = (id: number) => ({
  type: 'MINUS_LIKES_ITEM',
  payload: id
} as const);
