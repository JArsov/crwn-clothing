import shopReducer, { initialState } from "./shopReducer";

import { ShopState } from "../types/ShopState";
import { fetchAllShopData } from "../../actions/shopActions";

export const mockState: ShopState = initialState;

describe("ShopReducer", () => {
  it("should fetch all shop data", () => {
    const newState = shopReducer(mockState, fetchAllShopData());

    expect(newState.collections.length).toBe(mockState.collections.length);
  });
});
