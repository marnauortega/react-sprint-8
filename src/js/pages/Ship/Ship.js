import { useParams } from "react-router-dom";
import * as images from "../../../assets/images/missingImg/images.js";
import Info from "./Info";
import Films from "./Films";
import Pilots from "./Pilots";
import Page from "../../components/Page";

function Ship({ shipList, characters, films }) {
  const id = parseInt(useParams().id);
  let ship = shipList.find((ship) => ship.id === id);

  return (
    ship && (
      <Page title={ship.name}>
        <div className="image-side">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`}
            alt="ship image"
            onError={(e) => {
              e.target.src = images[`image${ship.id}`];
              e.onerror = null;
            }}
          />
        </div>
        <div className="info-side">
          <Info ship={ship} />
          <Pilots ship={ship} characters={characters} />
          <Films ship={ship} films={films} />
        </div>
      </Page>
    )
  );
}

export default Ship;
