import ExperimentOneDisplayInformation from "./ExperimentOneDisplayInformation.js";
import ExperimentOneHeader from "./ExperimentOneHeader.js";

const ExperimentOne = (props) => {
  return (
    <div>
      <ExperimentOneHeader />
      <ExperimentOneDisplayInformation />
      <button
        style={{
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          margin: "20px 500px",
        }}
        onClick={props.isBackButtonClicked}
      >
        Back to Main Arena
      </button>
    </div>
  );
};

export default ExperimentOne;
