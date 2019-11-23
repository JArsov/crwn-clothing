import { Nullable } from "./RootState";
import { ShopDataCollections } from "../../../shared/shop.data";

export interface ShopData {
  id: string;
  title: string;
  routeName: string;
  items: ShopDataItem[];
}

export interface ShopDataItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopState {
  collections: Nullable<ShopDataCollections>;
  isFetching: boolean;
  errorMessage: string;
}
