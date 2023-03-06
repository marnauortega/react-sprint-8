const Info = ({ ship }) => {
  return (
    <>
      <div className="info main-info">
        <h1>{ship.name}</h1>
        <h2 className="border-bottom">{ship.model}</h2>
        {/* <div>
          <p className="info-title">Starship class </p>
          <p className="info-content">{ship.starship_class}</p>
        </div> */}
        <div className="grid">
          <div>
            <p className="info-title">Manufacturer </p>
            <p className="info-content">{ship.manufacturer || "Unkown"}</p>
          </div>
          <div>
            <p className="info-title">cost </p>
            <p className="info-content">{ship.cost || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Crew </p>
            <p className="info-content">{ship.crew || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Passengers </p>
            <p className="info-content">{ship.passengers || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Cargo capacity </p>
            <p className="info-content">{ship.cargo_capacity || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Consumables </p>
            <p className="info-content">{ship.consumables || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Length </p>
            <p className="info-content">{ship.length || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Maximum atmosphering speed </p>
            <p className="info-content">{ship.max_atmosphering_speed || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Hyperdrive rating </p>
            <p className="info-content">{ship.hyperdrive_rating || "Unknown"}</p>
          </div>
          <div>
            <p className="info-title">Maximum speed in real space </p>
            <p className="info-content">{ship.MGLT + "MGLT" || "Unknown"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
