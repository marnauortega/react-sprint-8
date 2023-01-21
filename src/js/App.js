import React, { useState, useEffect } from "react";
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

  // Add id to objects and Remove api extra information
  let shipListWithId;

  if (shipList.data) {
    shipListWithId = shipList.data.results.map((ship) => {
      let id;
      if (ship.url.slice(-3, -2) >= "0" && ship.url.slice(-3, -2) <= "9") {
        id = { id: parseInt(ship.url.slice(-3, -1)) };
      } else {
        id = { id: parseInt(ship.url.slice(-2, -1)) };
      }

      return { ...ship, ...id };
    });

    console.log(shipListWithId);
    setShipList(shipListWithId);
  }

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
