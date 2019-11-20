import { ActionWithPayload } from "../storeHelper";
import { ShopDataCollections } from "../../shared/shop.data";

export enum ShopActionTypes {
  FETCH_ALL_SHOP_DATA = "FETCH_ALL_SHOP_DATA",
  UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS"
}

export type ShopActionWithPayload<P = any> = ActionWithPayload<
  ShopActionTypes,
  P
>;

export const fetchAllShopData = (): ShopActionWithPayload => ({
  type: ShopActionTypes.FETCH_ALL_SHOP_DATA
});

export const updateCollections = (collections: ShopDataCollections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: {
    collections
  }
});
