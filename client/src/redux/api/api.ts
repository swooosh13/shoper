import axios from "axios";

import {ItemType, Nullable} from "../types";

const intialSortBy = {
  type: "popular",
  order: "desc",
};

export type SortByType = typeof intialSortBy;

export type MyResponseType = {
  data: ItemType[];
  status?: number;
  statusText: string;
};

const itemsInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

class itemsAPI {
  static fetchItems(sortBy: SortByType = intialSortBy, category: Nullable<number> = null): Promise<any> {
    return itemsInstance
      .get<MyResponseType>(`items?${category !== null ? `category=${category}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then((response) => response.data);
  }

  static fetchAll(): Promise<any> {
    return itemsInstance.get('api/item');
  }

  static getItemProfile(itemId: number): Promise<any> {
    return itemsInstance
      .get<MyResponseType>(`items/${itemId}`)
      .then((response) => response.data);
  }
}


itemsAPI.fetchAll().then(({data}: any) => {
  console.log(data);
});


export {
  itemsAPI
}
