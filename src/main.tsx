import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StoreProvider } from "./presentation/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
