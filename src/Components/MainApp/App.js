import '../../CSS/MainApp/App.css';
import React, { useState } from 'react';
import Header from './MainAppHeader.js';
import ExperimentOne from '../ExperimentOne/ExperimentOne.js';
import ExperimentTwo from '../ExperimentTwo/ExperimentTwo.js';


function App() {
  // Button States
  const[experimentButtonState,setExperimentButtonState]=useState('0')
  const experimentButtons=[
    {
      name: 'Experiment 1',
      id : '1'
    },
    {
      name: 'Experiment 2',
      id:'2'
    }
  ];

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
          {
          experimentButtons.map( button => 
                  (experimentButtonState === '0') && 
                  <button key={button.id} onClick={()=>{handleExperimentButtonState(button.id)}}>{button.name}</button>)
          }
        </div>
      </div>
  );
}
export default App;