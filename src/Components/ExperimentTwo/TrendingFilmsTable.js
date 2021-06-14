import { useEffect, useState } from "react";
import TMDBApiCaller from "../../ApiTemplates/TMDBApiCaller.js";
import Button from "../ReUsableUIs/Button.js";

const TrendingFilmsTable = (props) => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const { id, name, age, email } = student //destructuring data from API

  useEffect(() => {
    (async () => {
      const tmdbApiData = await TMDBApiCaller(currentPage);
      setTrendingFilms(tmdbApiData.listOfTrendingFilms);
    })();
  }, [currentPage]);

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
          </tr>
        </thead>
        <tbody>
          {trendingFilms.map((film) => (
            <tr key={film.id}>
              <td>{film.title}</td>
              <td>{film.vote_average}</td>
              <td>{film.vote_count}</td>
              <td>{film.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        textToDisplay="<< Previous Page "
        onClickListener={() => setCurrentPage(Math.max(1, currentPage - 1))}
      />
      <Button
        textToDisplay="Next Page >>"
        onClickListener={() => setCurrentPage(currentPage + 1)}
      />
      <Button
        textToDisplay="Go Back"
        onClickListener={props.backButtonIsPressed}
      />
    </div>
  );
};
export default TrendingFilmsTable;
