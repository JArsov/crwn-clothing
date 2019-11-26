import { Middleware, Store, applyMiddleware, createStore } from "redux";

import { RootState } from "./reducers/types/RootState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/root.saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];
const isDevelopment = process.env.NODE_ENV !== "production";
const configureStore = (): Store<RootState> => {
  const appStore = isDevelopment ? applyMiddleware(...middlewares, createLogger())(createStore)(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ) : createStore(rootReducer, applyMiddleware(...middlewares));
  return appStore;
};

export const store = configureStore();
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
