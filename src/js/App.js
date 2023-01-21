import React, { useState, useEffect, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import fetchData from "./fetchData";
import Header from "./components/Header";
import Home from "./components/Home";
import ShipList from "./components/ShipList";
import Footer from "./components/Footer";
import Ship from "./components/Ship";

const App = () => {
  const [shipList, setShipList] = useState([]);

  useEffect(() => {
    fetchData("https://swapi.dev/api/starships/", setShipList);
  }, []);

  //   console.log(shipList);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<ShipList shipList={shipList} />} />
          <Route path="/starships/:id" element={<Ship shipList={shipList} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
