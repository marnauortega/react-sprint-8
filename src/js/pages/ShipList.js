import { Link } from "react-router-dom";

const ShipList = ({ shipList }) => {
  return (
    <>
      <div className="shiplist">
        {shipList.length > 0 &&
          shipList.map((ship) => (
            <Link to={"/starships/" + ship.id} className="ship" id={ship.id} key={ship.id}>
              <div className="name">{ship.name}</div>
              {/* <div className="model">{ship.model}</div> */}
              {/* <img src={`https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`} alt="ship image" /> */}
            </Link>
          ))}
      </div>
    </>
  );
};

export default ShipList;
