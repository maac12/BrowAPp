import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./component/App/App";
import ErrorBoundry from "./component/error-boundry/error-boundry";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
