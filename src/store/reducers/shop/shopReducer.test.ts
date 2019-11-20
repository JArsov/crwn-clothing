import { fetchAllShopData, updateCollections } from "../../actions/shopActions";
import shopReducer, { initialState } from "./shopReducer";

import SHOP_DATA from "../../../shared/shop.data";
import { ShopState } from "../types/ShopState";

export const mockState: ShopState = initialState;

describe("ShopReducer", () => {
  it("should fetch all shop data", () => {
    const newState = shopReducer(mockState, fetchAllShopData());

    expect(newState).toEqual(mockState);
  });

  it("should update the collections", () => {
    const newState = shopReducer(mockState, updateCollections(SHOP_DATA));

    expect(newState.collections).toEqual(SHOP_DATA);
  });
});
