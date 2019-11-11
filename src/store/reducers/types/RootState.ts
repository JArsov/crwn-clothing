import { UserState } from "./UserState";

export interface RootState {
  readonly user: Readonly<UserState>;
}
