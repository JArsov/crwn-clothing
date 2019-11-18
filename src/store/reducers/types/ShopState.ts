import { ShopDataCollections } from "../../../shared/shop.data";

export interface ShopData {
  id: number;
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
  collections: ShopDataCollections;
}
