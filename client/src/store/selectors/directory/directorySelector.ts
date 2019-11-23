import { RootState } from "../../reducers/types/RootState";
import { createSelector } from "reselect";

const selectDirectory = (state: RootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
