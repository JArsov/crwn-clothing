import { CartState } from "./CartState";
import { UserState } from "./UserState";

export interface RootState {
  readonly user: Readonly<UserState>;
  readonly cart: Readonly<CartState>;
}
