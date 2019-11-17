import { DirectoryState } from "../types/DirectoryState";
import directoryReducer from "./directoryReducer";
import { fetchAllSections } from "../../actions/directoryActions";

export const mockState: DirectoryState = {
  sections: []
};

describe("DirectoryReducer", () => {
  it("should fetch all sections", () => {
    const newState = directoryReducer(mockState, fetchAllSections());

    expect(newState.sections.length).toBe(mockState.sections.length);
  });
});
