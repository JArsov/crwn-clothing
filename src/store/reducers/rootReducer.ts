import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";
import directoryReducer from "./directory/directoryReducer";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shopReducer";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userReducer";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
