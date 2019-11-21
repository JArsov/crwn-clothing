import { Store, applyMiddleware, createStore } from "redux";

import { RootState } from "./reducers/types/RootState";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const middlewares = [thunk, createLogger()];
const isDevelopment = process.env.NODE_ENV !== "production";

const configureStore = (): Store<RootState> => {
  const appStore = isDevelopment
    ? applyMiddleware(...middlewares)(createStore)(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
  return appStore;
};

export const store = configureStore();

export const persistor = persistStore(store);
