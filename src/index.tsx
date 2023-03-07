import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-on86dq15406z8lnz.us.auth0.com"
        clientId="v0uAxdGYuIfrOGr1HY9CZMuHhWaZg59z"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      > 
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);
