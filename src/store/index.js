import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const persistConfig = {
  key: "cart",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
