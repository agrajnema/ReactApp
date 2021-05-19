import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./app.js";

ReactDOM.render(
  <Provider store={configurestore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
