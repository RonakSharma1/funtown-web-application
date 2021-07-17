import { useState } from "react";
import Button from "../common/Button.js";
import TrendingFilmsTable from "../ExperimentTwo/TrendingFilmsTable.js";

const ExperimentTwo = (props) => {
  const [movieButtonState, setMovieButtonState] = useState(null);

  if (movieButtonState == null) {
    return (
      <>
        <Button
          text="What are the Trending Movies these days"
          onClickListener={() => setMovieButtonState(1)}
        />

        <Button text="Take power and choose your MOVIE" />

        <Button text="Lets recommend you some movies" />

        <Button
          text="Head to Main Arena"
          onClickListener={props.isBackButtonClicked}
        />
      </>
    );
  } else {
    return (
      <>
        {movieButtonState === 1 && (
          <TrendingFilmsTable
            backButtonIsPressed={() => setMovieButtonState(null)}
          />
        )}
      </>
    );
  }
};

export default ExperimentTwo;
