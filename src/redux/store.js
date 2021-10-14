import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const persistConfig = {
  key: "hello",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: { items: persistReducer(persistConfig, reducer) },
  middleware: [logger],
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export default { store, persistor };
