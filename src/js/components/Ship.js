import React from "react";
import { useParams } from "react-router-dom";

function Ship({ shipList }) {
  const id = parseInt(useParams().id);
  let ship = shipList.find((ship) => ship.id === id);

  //   console.log(shipList, id, ship);

  return (
    ship && (
      <>
        <h1>{ship.name}</h1>
        <img src="" alt="ship image" />
        <div className="info main-info">
          <p>Model: {ship.model}</p>
          <p>Starship class: {ship.starship_class}</p>
          <p>Manufacturer: {ship.manufacturer}</p>
          <p>cost: {ship.cost}</p>
        </div>
        <div className="info secondary-info">
          <p>Crew: {ship.crew}</p>
          <p>Passengers: {ship.passengers}</p>
          <p>Cargo capacity: {ship.cargo_capacity}</p>
          <p>Consumables: {ship.consumables}</p>
          <p>Length: {ship.length}</p>
          <p>Maximum atmosphering speed: {ship.max_atmosphering_speed}</p>
          <p>Hyperdrive rating: {ship.hyperdrive_rating}</p>
          <p>Maximum speed in real space: {ship.MGLT + "MGLT"}</p>
        </div>
      </>
    )
  );
}

export default Ship;
