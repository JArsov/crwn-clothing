import {
  ShopActionTypes,
  ShopActionWithPayload
} from "../../actions/shopActions";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { Reducer } from "redux";
import { ShopState } from "../types/ShopState";

export const initialState: ShopState = {
  collections: null
};

type ShopReducer = Reducer<ShopState, ShopActionWithPayload>;

const fetchAllShopData: ShopReducer = state => {
  const shopState = state as ShopState;
  return shopState;
};

const updateCollections: ShopReducer = (state, action) => {
  const shopState = state as ShopState;
  return {
    ...shopState,
    collections: action.payload.collections
  };
};

const actionMap: ActionMap<ShopState, ShopActionWithPayload> = {
  [ShopActionTypes.FETCH_ALL_SHOP_DATA]: fetchAllShopData,
  [ShopActionTypes.UPDATE_COLLECTIONS]: updateCollections
};

export default reducerWithActionMap(actionMap, initialState);
