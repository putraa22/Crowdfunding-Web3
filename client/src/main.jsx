import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
