import ExperimentOneDisplayInformation from "./ExperimentOneDisplayInformation.js";
import ExperimentOneHeader from "./ExperimentOneHeader.js";

const ExperimentOne = ({ isBackButtonClicked }) => {
  const backButtonStyle = {
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    margin: "20px 500px",
  };
  return (
    <>
      <ExperimentOneHeader />
      <ExperimentOneDisplayInformation />
      <button style={backButtonStyle} onClick={isBackButtonClicked}>
        Back to Main Arena
      </button>
    </>
  );
};

export default ExperimentOne;
