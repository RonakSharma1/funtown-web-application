import Button from "../ReUsableUIs/Button.js";
import TMDBApiCaller from "../../ApiTemplates/TMDBApiCaller.js";

const ExperimentTwo = (props) => {
  return (
    <>
      <h1>Hello World Tour</h1>
      <Button
        textToDisplay="What are the Trending Movies these days"
        onClickListener={TMDBApiCaller}
      />

      <Button textToDisplay="Take power and choose your MOVIE" />

      <Button textToDisplay="Lets recommend you some movies" />

      <Button
        textToDisplay="Head to Main Arena"
        onClickListener={props.isBackButtonClicked}
      />
    </>
  );
};

export default ExperimentTwo;
