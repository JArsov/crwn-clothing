import { CartState } from "./CartState";
import { DirectoryState } from "./DirectoryState";
import { ShopState } from "./ShopState";
import { UserState } from "./UserState";

export type Nullable<T> = T | null;

export interface RootState {
  readonly user: Readonly<UserState>;
  readonly cart: Readonly<CartState>;
  readonly directory: Readonly<DirectoryState>;
  readonly shop: Readonly<ShopState>;
}
