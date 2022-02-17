import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./AppRouter";
import ErrorBoundry from "./component/error-boundry/error-boundry";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundry>
        <AppRouter />
      </ErrorBoundry>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
