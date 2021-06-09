import { useState } from "react";
import Button from "../ReUsableUIs/Button.js";
import TrendingFilmsTable from "../ExperimentTwo/TrendingFilmsTable.js";

const ExperimentTwo = (props) => {
  const [movieButtonState, setMovieButtonState] = useState(null);
  if (movieButtonState == null) {
    return (
      <>
        <Button
          textToDisplay="What are the Trending Movies these days"
          onClickListener={() => setMovieButtonState(1)}
        />

        <Button textToDisplay="Take power and choose your MOVIE" />

        <Button textToDisplay="Lets recommend you some movies" />

        <Button
          textToDisplay="Head to Main Arena"
          onClickListener={props.isBackButtonClicked}
        />
      </>
    );
  } else {
    return <>{movieButtonState == 1 && <TrendingFilmsTable />}</>;
  }
};

export default ExperimentTwo;
