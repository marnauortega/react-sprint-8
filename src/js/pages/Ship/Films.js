import { extractIdFromString } from "../../components/util/fetchData";
const Films = ({ ship, films }) => {
  return (
    <>
      <h3 className="border-bottom">Films</h3>
      <div className="info films">
        {ship.films &&
          ship.films.map((film) => {
            const id = extractIdFromString(film);
            return (
              <>
                <div className="film" key={id}>
                  <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
                  <p className="info-content">{films.find((c) => c.id === id)?.title}</p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Films;
