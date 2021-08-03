import axios from "axios";
var config = require("../config");

export default async (pageNumber) => {
  const tmdbApiKey = config.TMDB.tmdbApiKey;
  const expressServerTMDBApiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbApiKey}&page=${pageNumber}`;

  try {
    const tmdbApiData = await axios.get(expressServerTMDBApiUrl);
    const arrayOfMovies = tmdbApiData.data.results;
    return {
      listOfTrendingFilms: arrayOfMovies,
    };
  } catch (error) {
    console.log(error.message);
  }
};
