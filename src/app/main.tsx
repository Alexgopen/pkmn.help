import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "tachyons";
import { App } from "./App";
import { ErrorBoundary } from "./unsorted/ErrorBoundary";
import "./util/i18n";
import { ScreenError } from "./screens/ScreenError";
import "../css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary render={(error) => <ScreenError error={error} />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.querySelector("#app")
);
