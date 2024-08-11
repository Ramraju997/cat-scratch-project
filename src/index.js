import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { DataProvider } from './App'

console.log("hi");

ReactDOM.render(
  <DataProvider >
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>
  ,
  document.getElementById("root")
);
