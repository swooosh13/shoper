import {Nullable, InferValueTypes} from '../types';
import * as actions from '../actions/filters';

const initialState = {
  category: null as Nullable<string>,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}


type StateType = typeof initialState;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const filterReducer = (state: StateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {...state, category: action.payload}
    case 'SET_SORT_BY':
      return {...state, sortBy: action.payload}
    default:
      return state;
  }
}

export {
  filterReducer
};
