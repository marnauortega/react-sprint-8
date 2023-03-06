import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import * as images from "../../assets/images/missingImg/images.js";

const ShipList = ({ shipList }) => {
  return (
    <Page title="Starships" mainClass="starships">
      <div className="shiplist">
        {shipList.length > 0 &&
          shipList.map((ship) => (
            <Link to={"/starships/" + ship.id} className="ship" id={ship.id} key={ship.id}>
              {/* <div className="model">{ship.model}</div> */}
              <img
                className="ship-image"
                src={`https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`}
                alt="ship image"
                onError={(e) => {
                  e.target.src = images[`image${ship.id}`];
                  e.onerror = null;
                }}
              />
              <div className="ship-info">
                <p className="ship-name">{ship.name}</p>
                <img src={arrow} alt="arrow icon" />
              </div>
            </Link>
          ))}
      </div>
    </Page>
  );
};

export default ShipList;
