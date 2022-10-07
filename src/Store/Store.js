import { createStore, applyMiddleware } from "redux";
import reducers from "../Redux/Reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}

