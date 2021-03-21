import ExperimentOneDisplayInformation from "./ExperimentOneDisplayInformation.js";
import ExperimentOneHeader from "./ExperimentOneHeader.js";
import Button from "../ReUsableUIs/Button.js";

const ExperimentOne = ({ isBackButtonClicked }) => {
  return (
    <>
      <ExperimentOneHeader />
      <ExperimentOneDisplayInformation />
      <Button
        textToDisplay="Head to Main Arena"
        onClickListener={isBackButtonClicked}
      />
    </>
  );
};

export default ExperimentOne;
