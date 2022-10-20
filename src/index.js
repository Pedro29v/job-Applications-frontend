import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={`${window.location.origin}/home`}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
