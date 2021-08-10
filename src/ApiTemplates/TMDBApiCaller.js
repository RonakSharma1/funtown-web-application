import axios from "axios";
var config = require("../config");

export default async (pageNumber) => {
  const tmdbApiKey = config.TMDB.tmdbApiKey;
  const expressServerTMDBApiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbApiKey}&page=${pageNumber}`;
  const expressServerTMDBGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`;

  try {
    const [tmdbApiData, tmbdGenreData] = await Promise.all([
      axios.get(expressServerTMDBApiUrl),
      axios.get(expressServerTMDBGenreUrl),
    ]);
    const arrayOfMovies = tmdbApiData.data.results;
    const arrayOfGenres = tmbdGenreData.data.genres;
    return {
      listOfTrendingFilms: arrayOfMovies,
      listOfGenres: arrayOfGenres,
    };
  } catch (error) {
    console.log(error.message);
  }
};
