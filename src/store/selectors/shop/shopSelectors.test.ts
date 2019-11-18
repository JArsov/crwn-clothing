import { selectCollection, selectCollections } from "./shopSelectors";

import mockRootState from "../../../shared/test-data/mockRootState";

describe("Shop selectors", () => {
  it("should select the collections", () => {
    expect(selectCollections(mockRootState)).toEqual(
      mockRootState.shop.collections
    );
  });

  it("should select a collection based on url param", () => {
    expect(selectCollection("hats")(mockRootState)).toEqual(
      mockRootState.shop.collections.hats
    );
  });
});
