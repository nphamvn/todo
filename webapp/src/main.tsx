import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vzxphouz.us.auth0.com"
      clientId="PGDJedeFsVQgpKhW6vo8Eyu81GGxhHSe"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "todo",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
