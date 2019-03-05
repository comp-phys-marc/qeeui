import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./assets/scss/material-kit-react.css?v=1.3.0";

dotenv.load();

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
