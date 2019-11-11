export interface User {
  email: string;
  createdAt: Date;
  displayName: string;
}

export type UserOrNull = User | null;

export interface UserState {
  currentUser: UserOrNull;
}
