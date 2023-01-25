import { extractIdFromString } from "../../components/util/fetchData";

const Pilots = ({ ship, characters }) => {
  return (
    <>
      <div className="info pilots">
        <h3>Pilots</h3>
        {ship.pilots &&
          ship.pilots.map((pilot) => {
            const id = extractIdFromString(pilot);
            return (
              <>
                <div className="pilot" key={id}>
                  <p>{characters.find((c) => c.id === id)?.name}</p>
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Pilots;
