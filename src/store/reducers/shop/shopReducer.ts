import {
  ShopActionTypes,
  ShopActionWithPayload
} from "../../actions/shopActions";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { Reducer } from "redux";
import { ShopState } from "../types/ShopState";

export const initialState: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};

type ShopReducer = Reducer<ShopState, ShopActionWithPayload>;

const fetchCollectionsStart: ShopReducer = state => {
  const shopState = state as ShopState;
  return {
    ...shopState,
    isFetching: true
  };
};

const fetchCollectionsSuccess: ShopReducer = (state, action) => {
  const shopState = state as ShopState;
  return {
    ...shopState,
    isFetching: false,
    collections: action.payload.collections,
    errorMessage: ""
  };
};

const fetchCollectionsFailure: ShopReducer = (state, action) => {
  const shopState = state as ShopState;
  return {
    ...shopState,
    isFetching: false,
    collections: null,
    errorMessage: action.payload.errorMessage
  };
};

const actionMap: ActionMap<ShopState, ShopActionWithPayload> = {
  [ShopActionTypes.FETCH_COLLECTIONS_START]: fetchCollectionsStart,
  [ShopActionTypes.FETCH_COLLECTIONS_SUCCESS]: fetchCollectionsSuccess,
  [ShopActionTypes.FETCH_COLLECTIONS_FAILURE]: fetchCollectionsFailure
};

export default reducerWithActionMap(actionMap, initialState);
