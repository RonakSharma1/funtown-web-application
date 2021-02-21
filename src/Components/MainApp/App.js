import '../../CSS/MainApp/App.css';
import React, { useState } from 'react';
import Header from './MainAppHeader.js';
import ExperimentOne from '../ExperimentOne/ExperimentOne.js';
import ExperimentTwo from '../ExperimentTwo/ExperimentTwo.js';


function App() {
  // Button States
  const [headerState, setHeaderState]=useState(true);
  const [experimentOneButtonState,setExperimentOneButtonState ]=useState(false);
  const [experimentTwoButtonState,setExperimentTwoButtonState]=useState(false);

  const handleExperimentOneEvent=()=>
  {
    setExperimentOneButtonState(true);
    setExperimentTwoButtonState(false);
    setHeaderState(false);
  }

  const handleExperimentTwoEvent=()=>
  {
    setExperimentTwoButtonState(true);
    setExperimentOneButtonState(false);
    setHeaderState(false);
  }

  const backButtonState=()=>
  {
    setExperimentOneButtonState(false);
    setExperimentTwoButtonState(false);
    setHeaderState(true);
  }

  return (
      <div>
        <div>
          {headerState && <Header/>}
          {experimentOneButtonState && <ExperimentOne isBackButtonClicked={backButtonState}/>}
          {experimentTwoButtonState && <ExperimentTwo />}
        </div>

        <div>
          {headerState && <button onClick={handleExperimentOneEvent}>Experiment 1</button>}
          {headerState && <button onClick={handleExperimentTwoEvent}>Experiment 2</button>}
        </div>
      </div>
  );
}
export default App;