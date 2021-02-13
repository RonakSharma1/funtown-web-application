import './App.css';
import React, { useState } from 'react';
import Header from './Components/MainApp/Header.js';
import ExperimentOne from './Components/ExperimentOne/ExperimentOne.js';
import ExperimentTwo from './Components/ExperimentTwo/ExperimentTwo.js';


function App() {
  // Button States
  const [headerState, setHeaderState]=useState(true);
  const [experimentOneButtonState,setExperimentOneButtonState ]=useState(false);
  const [experimentTwoButtonState,setExperimentTwoButtonState]=useState(false);

  // if(experimentOneButtonState || experimentTwoButtonState){
  //   setHeaderState(!headerState);
  // }

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

  return (
      <div>
        <div>
          {headerState && <Header/>}
          {experimentOneButtonState && <ExperimentOne/>}
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