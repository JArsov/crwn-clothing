import { ActionWithPayload } from "../storeHelper";

export enum ShopActionTypes {
  FETCH_ALL_SHOP_DATA = "FETCH_ALL_SHOP_DATA"
}

export type ShopActionWithPayload<P = any> = ActionWithPayload<
  ShopActionTypes,
  P
>;

export const fetchAllShopData = (): ShopActionWithPayload => ({
  type: ShopActionTypes.FETCH_ALL_SHOP_DATA
});
