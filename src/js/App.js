import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShipList from "./components/ShipList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <ShipList />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
