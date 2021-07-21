import axios from "axios";

import { ItemType, Nullable } from "../types";

const intialSortBy = {
  type: 'popular',
  order:'desc'
};

export type SortByType = typeof intialSortBy;


const itemsInstance = axios.create({
  baseURL: 'http://localhost:5000/'
});

class itemsAPI {
  static fetchItems(sortBy : SortByType = intialSortBy, category: Nullable<number> = null): Promise<any> {
    return itemsInstance.get(`items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
  }

  static getItemProfile(itemId: number): Promise<any> {
    return itemsInstance.get(`items/${itemId}`);
  }
}

export {
  itemsAPI
}
