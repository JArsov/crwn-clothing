import { Store, applyMiddleware, createStore } from "redux";

import { RootState } from "../store/reducers/types/RootState";
import { createLogger } from "redux-logger";
import rootReducer from "../store/reducers/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const middlewares = [createLogger()];
const isDevelopment = process.env.REACT_APP_NODE_ENV !== "production";

export default function configureStore(): Store<RootState> {
  const store = isDevelopment
    ? applyMiddleware(...middlewares)(createStore)(
        rootReducer(),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : createStore(
        rootReducer(),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
  return store;
}
