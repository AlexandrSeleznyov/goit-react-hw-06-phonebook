import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading="загружаем" persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
