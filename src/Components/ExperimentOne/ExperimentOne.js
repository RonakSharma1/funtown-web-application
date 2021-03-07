import ExperimentOneDisplayInformation from "./ExperimentOneDisplayInformation.js";
import ExperimentOneHeader from "./ExperimentOneHeader.js";

const ExperimentOne = (props) => {
  return (
    <div>
      <ExperimentOneHeader />
      <ExperimentOneDisplayInformation />
      <button onClick={props.isBackButtonClicked}>Back to Main Arena</button>
    </div>
  );
};

export default ExperimentOne;
