import React from "react";
import { Link } from "react-router-dom";

const ShipList = ({ shipList }) => {
  console.log(shipList.data);

  return (
    <>
      <div className="shiplist">
        {shipList &&
          shipList.map((ship) => {
            return (
              <>
                <Link to={"/starships/" + ship.id} className="ship" id={ship.id} key={ship.id}>
                  <div className="name">{ship.name}</div>
                  <div className="model">{ship.model}</div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ShipList;
