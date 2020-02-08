import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
//import rootSaga from "./rootSagas";

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  //store.sagaTask = sagaMiddleware.run(rootSaga); // tslint:disable-line

  return store;
}

export default configureStore;
