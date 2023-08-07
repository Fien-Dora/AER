import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DateProvider } from "./hooks/DateContext";
import { UserProvider } from "./hooks/UserContext";
import { SiteDataProvider } from "./hooks/SiteDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiteDataProvider>
      <UserProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </UserProvider>
    </SiteDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
