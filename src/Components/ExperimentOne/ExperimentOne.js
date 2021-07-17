import ExperimentOneDisplayInformation from "./ExperimentOneDisplayInformation.js";
import ExperimentOneHeader from "./ExperimentOneHeader.js";
import Button from "../common/Button.js";

const ExperimentOne = ({ isBackButtonClicked }) => {
  return (
    <>
      <ExperimentOneHeader />
      <ExperimentOneDisplayInformation />
      <Button text="Head to Main Arena" onClickListener={isBackButtonClicked} />
    </>
  );
};

export default ExperimentOne;
