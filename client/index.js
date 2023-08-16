import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
/* Import and destructure main from src/component/index.js
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>
);
