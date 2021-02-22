import '../../CSS/MainApp/App.css';
import React, { useState } from 'react';
import Header from './MainAppHeader.js';
import ExperimentOne from '../ExperimentOne/ExperimentOne.js';
import ExperimentTwo from '../ExperimentTwo/ExperimentTwo.js';


function App() {
  // Button States
  const[experimentButtonState,setExperimentButtonState]=useState('0')

  const handleExperimentButtonState = (experimentButtonSelected)=>{
    setExperimentButtonState(experimentButtonSelected);
  }
  
  return (
      <div>
        <div>
          {(experimentButtonState === '0') && <Header/>}
          {(experimentButtonState === '1') && <ExperimentOne isBackButtonClicked={()=>{setExperimentButtonState('0')}}/>}
          {(experimentButtonState === '2') && <ExperimentTwo />}
        </div>

        <div>
          {(experimentButtonState === '0') && <button onClick={()=>{handleExperimentButtonState('1')}}>Experiment 1</button>}
          {(experimentButtonState === '0') && <button onClick={()=>{handleExperimentButtonState('2')}}>Experiment 2</button>}
        </div>
      </div>
  );
}
export default App;