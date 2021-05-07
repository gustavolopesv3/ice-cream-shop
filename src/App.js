import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";

import Routes from "./routes";
import Header from "./components/Header";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
          <Header />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
