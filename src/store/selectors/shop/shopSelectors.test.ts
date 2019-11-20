import { selectCollection, selectCollections } from "./shopSelectors";

import { RootState } from "../../reducers/types/RootState";
import { ShopData } from "../../reducers/types/ShopState";
import { ShopDataCollections } from "../../../shared/shop.data";
import cloneDeep from "lodash/cloneDeep";
import mockRootState from "../../../shared/test-data/mockRootState";

describe("Shop selectors", () => {
  it("should select the collections", () => {
    expect(selectCollections(mockRootState)).toEqual(
      mockRootState.shop.collections
    );
  });

  it("should select a collection based on url param", () => {
    const mockRootStateCollections = mockRootState.shop
      .collections as ShopDataCollections;
    expect(selectCollection("hats")(mockRootState) as ShopData).toEqual(
      mockRootStateCollections.hats
    );
  });

  it("should select null if the shop state is null", () => {
    const mockRootStateWithNullShop: RootState = {
      ...cloneDeep(mockRootState),
      shop: {
        collections: null
      }
    };

    expect(selectCollection("hats")(mockRootStateWithNullShop)).toBeNull();
  });
});
