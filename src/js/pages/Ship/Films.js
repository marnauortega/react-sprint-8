import { extractIdFromString } from "../../components/util/fetchData";
const Films = ({ ship, films }) => {
  return (
    <>
      <div className="info films">
        <h3>Films</h3>
        {ship.films &&
          ship.films.map((film) => {
            const id = extractIdFromString(film);
            return (
              <>
                <div className="film" key={id}>
                  <p>{films.find((c) => c.id === id)?.title}</p>
                  <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Films;
