import { ShopDataItem } from "../../../shared/shop.data";

export interface CartItem extends ShopDataItem {
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}
