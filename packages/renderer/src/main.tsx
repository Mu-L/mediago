import "antd/dist/reset.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { tdApp } from "./utils";
import App from "./App";
import "./i18n";
import "./globals.css";

dayjs.locale("zh-cn");
tdApp.init();

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
