import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";

const root = createRoot(document.getElementById("root"));

root.render(
  // <StrictMode> {/* StrictMode ko include karna best practice hai */}
  <Provider store={Store}>
    <App />
  </Provider>
  // </StrictMode>
);
