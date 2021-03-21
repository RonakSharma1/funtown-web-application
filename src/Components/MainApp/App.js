import "../../CSS/MainApp/App.css";
import { useState } from "react";
import Header from "./MainAppHeader.js";
import ExperimentOne from "../ExperimentOne/ExperimentOne.js";
import ExperimentTwo from "../ExperimentTwo/ExperimentTwo.js";

function App() {
  // Button States
  const [experimentButtonState, setExperimentButtonState] = useState(null);
  const experimentButtons = [
    {
      name: "Experiment 1",
      id: 1,
    },
    {
      name: "Experiment 2",
      id: 2,
    },
  ];

  return (
    <div>
      <div>
        {experimentButtonState === null && <Header />}
        {experimentButtonState === 1 && (
          <ExperimentOne
            isBackButtonClicked={() => setExperimentButtonState(null)}
          />
        )}
        {experimentButtonState === 2 && <ExperimentTwo />}
      </div>
      <div>
        {experimentButtons.map(
          (button) =>
            experimentButtonState === null && (
              <button
                key={button.id}
                onClick={() => setExperimentButtonState(button.id)}
              >
                {button.name}
              </button>
            )
        )}
      </div>
    </div>
  );
}
export default App;
