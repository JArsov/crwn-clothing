import mockRootState from "../../../shared/test-data/mockRootState";
import { selectSections } from "./directorySelector";

describe("Directory selectors", () => {
  it("should select the sections of the directory", () => {
    expect(selectSections(mockRootState).length).toBe(
      mockRootState.directory.sections.length
    );
  });
});
