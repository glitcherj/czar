import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/_global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Header, Footer } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
