import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userReducer";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
