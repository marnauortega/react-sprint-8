import { extractIdFromString } from "../../components/util/fetchData";

const Pilots = ({ ship, characters }) => {
  return (
    <>
      {ship.pilots.length !== 0 && (
        <>
          <h3 className="pilots border-bottom">Pilots</h3>
          <div className="info pilots">
            {ship.pilots &&
              ship.pilots.map((pilot) => {
                const id = extractIdFromString(pilot);
                return (
                  <>
                    <div className="pilot" key={id}>
                      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                      <p className="info-content">{characters.find((c) => c.id === id)?.name}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Pilots;
