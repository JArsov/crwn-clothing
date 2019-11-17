import { ActionWithPayload } from "../storeHelper";

export enum DirectoryActionTypes {
  FETCH_ALL_SECTIONS = "FETCH_ALL_SECTIONS"
}

export type DirectoryActionWithPayload<P = any> = ActionWithPayload<
  DirectoryActionTypes,
  P
>;

export const fetchAllSections = (): DirectoryActionWithPayload => ({
  type: DirectoryActionTypes.FETCH_ALL_SECTIONS
});
