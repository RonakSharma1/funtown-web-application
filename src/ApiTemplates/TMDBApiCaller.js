import axios from "axios";
var config = require("../../config");

export default async () => {
  const tmdbApiKey = config.TMDB.tmdbApiKey;
  const expressServerTMDBApiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbApiKey}`;

  try {
    const tmdbApiData = await axios.get(expressServerTMDBApiUrl);
    console.log(tmdbApiData.data);
    return {
      //Add here to return something in loop
    };
  } catch (error) {
    console.log(error.message);
  }
};
