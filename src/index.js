import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);
