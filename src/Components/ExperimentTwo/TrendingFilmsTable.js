import { useEffect, useState } from "react";
import TMDBApiCaller from "../../ApiTemplates/TMDBApiCaller.js";
import Button from "../common/Button.js";
import FilmDescriptionPopUp from "../ExperimentTwo/FilmDescriptionPopUp.js";

const TrendingFilmsTable = (props) => {
  var genreName = {};
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmDescription, setFilmDescription] = useState("Select a movie");
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [genreMapping, setGenreMapping] = useState([{}]);

  const popAndStoreFilmDescription = (filmDescription) => {
    setFilmDescription(filmDescription);
    setShowPopUp(true);
  };
  const hidePopUp = () => {
    setShowPopUp(false);
  };

  const displayPreviousButton = () => {
    if (currentPage - 1 < 1) {
      setShowPreviousButton(true);
    } else {
      setShowPreviousButton(false);
    }
  };

  useEffect(() => {
    (async () => {
      const tmdbApiData = await TMDBApiCaller(currentPage);
      filmGenreMapping(tmdbApiData.listOfGenres);
      setTrendingFilms(tmdbApiData.listOfTrendingFilms);
    })();
  }, [currentPage]);

  useEffect(displayPreviousButton);

  const filmGenreMapping = (listOfGenres) => {
    var genres = {};
    listOfGenres.map((object) => {
      genres[object.id] = object.name;
    });
    setGenreMapping(genres);
    console.log(genreMapping);
  };
  return (
    <div>
      <h1>Trending Films</h1>
      <h2>What to watch? Below are my suggestions</h2>
      <table id="trendingFilmsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Average Vote</th>
            <th>Vote Count</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {trendingFilms.map((film, index) => (
            <tr key={film.id}>
              <td>
                <a
                  href="#"
                  onClick={() => popAndStoreFilmDescription(film.overview)}
                >
                  {film.title}
                </a>
              </td>
              <td>{film.vote_average}</td>
              <td>{film.vote_count}</td>
              <td>{film.popularity}</td>
              <td>
                {film.genre_ids.map((id) => {
                  if (genreName[index] != null) {
                    genreName[index] =
                      genreName[index].toString() +
                      ", " +
                      genreMapping[id].toString();
                  } else {
                    genreName[index] = genreMapping[id].toString();
                  }
                })}
                {genreName[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopUp && (
        <FilmDescriptionPopUp
          filmDescription={filmDescription}
          handleClose={hidePopUp}
        />
      )}
      <Button
        text="<< Previous Page "
        onClickListener={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disable={showPreviousButton}
      />
      <Button
        text="Next Page >>"
        onClickListener={() => setCurrentPage(currentPage + 1)}
      />
      <Button text="Go Back" onClickListener={props.backButtonIsPressed} />
    </div>
  );
};
export default TrendingFilmsTable;
