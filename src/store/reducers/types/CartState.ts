import { ShopDataItem } from "./ShopState";

export interface CartItem extends ShopDataItem {
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}
