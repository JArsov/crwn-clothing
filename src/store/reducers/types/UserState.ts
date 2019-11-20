import { Nullable } from "./RootState";

export interface User {
  email: string;
  createdAt: Date;
  displayName: string;
}

export interface UserState {
  currentUser: Nullable<User>;
}
