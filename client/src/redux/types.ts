export type Nullable<T> = null | T;

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ItemType = {
  id: number;
  brand: string;
  title: string;
  description: string;
  category: number;
  images: Array<string>;
  priceRUS: number;
  priceUS: number;
};

export type ArrayMap<T> = {
  [key: string]: Array<T>;
};

export type LikedItem = {
  id: number;
  title: string;
  price: number;
  imgURL: string;
};
