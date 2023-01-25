import { useParams } from "react-router-dom";
import Info from "./Info";
import Films from "./Films";
import Pilots from "./Pilots";

function Ship({ shipList, characters, films }) {
  const id = parseInt(useParams().id);
  let ship = shipList.find((ship) => ship.id === id);

  return (
    ship && (
      <>
        <h1>{ship.name}</h1>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`} alt="ship image" />
        <Info ship={ship} />
        <Pilots ship={ship} characters={characters} />
        <Films ship={ship} films={films} />
      </>
    )
  );
}

export default Ship;
