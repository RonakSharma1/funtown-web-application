import axios from "axios";

export default async (pageNumber) => {
  const expressServerTmdbApiUrl = "http://localhost:5000/tmdbApi";
  try {
    const tmdbApiData = await axios.get(expressServerTmdbApiUrl, {
      params: {
        pageNumber: pageNumber,
      },
    });
    return {
      listOfTrendingFilms: tmdbApiData.data.listOfTrendingFilms,
      listOfGenres: tmdbApiData.data.listOfGenres,
    };
  } catch (error) {
    console.log(error.message);
  }
};
