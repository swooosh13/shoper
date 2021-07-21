export const setSortBy = ({type, order}: {type: string, order: string}) => ({
  type: "SET_SORT_BY",
  payload: {type, order}
} as const);

export const setCategory = (catIndex: number) => ({
  type: "SET_CATEGORY",
  payload: catIndex
} as const);


