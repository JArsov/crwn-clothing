import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = () =>
  combineReducers({ user: userReducer, cart: cartReducer });

export default rootReducer;
