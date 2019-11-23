import SHOP_DATA, { ShopDataCollections } from "../../../shared/shop.data";
import {
  fetchCollectionsFailure,
  fetchCollectionsStart,
  fetchCollectionsSuccess
} from "../../actions/shopActions";
import shopReducer, { initialState } from "./shopReducer";

import { ShopState } from "../types/ShopState";

export const mockState: ShopState = initialState;

describe("ShopReducer", () => {
  it("should set isFetching to true when fetchCollectionsStart is called", () => {
    const newState = shopReducer(mockState, fetchCollectionsStart());

    expect(newState.isFetching).toBeTruthy();
  });

  it("should set collections array when fetchCollectionsSuccess is called", () => {
    const newState = shopReducer(
      mockState,
      fetchCollectionsSuccess(mockState.collections as ShopDataCollections)
    );
    expect(newState.collections).toEqual(mockState.collections);
  });

  it("should set errorMessage when fetchCollectionsFailure is called", () => {
    const errorMessage = "fetching failed";
    const newState = shopReducer(
      mockState,
      fetchCollectionsFailure(errorMessage)
    );
    expect(newState.errorMessage).toEqual(errorMessage);
  });
});
