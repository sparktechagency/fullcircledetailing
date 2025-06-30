import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routers/Router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>
);
