import React, { useState, useEffect } from "react";
import { cloneElement } from "react/cjs/react.production.min";
import fetchData from "../fetchData";

const ShipList = () => {
  const [shipList, setShipList] = useState([]);

  useEffect(() => {
    fetchData("https://swapi.dev/api/starships/", setShipList);
  }, []);

  return (
    <>
      <div className="shiplist">
        {shipList.data &&
          shipList.data.results.map((ship) => {
            // console.log(ship.url.slice(-3, -2));
            let id;
            if (ship.url.slice(-3, -2) >= "0" && ship.url.slice(-3, -2) <= "9") {
              id = ship.url.slice(-3, -1);
            } else {
              id = ship.url.slice(-2, -1);
            }

            return (
              <>
                <div className="ship" id={id} key={id}>
                  <div className="name">{ship.name}</div>
                  <div className="model">{ship.model}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ShipList;
