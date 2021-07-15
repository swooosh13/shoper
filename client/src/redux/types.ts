export type Nullable<T> = null | T;
export type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;
