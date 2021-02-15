import ExperimentOneHeader from './ExperimentOneHeader.js'
import ExperimentOneUserForm from './ExperimentOneUserForm.js'
import BoredAPIResponse from './BoredAPICaller.js'

function ExperimentOne(props){

    return(
        <div>
            <ExperimentOneHeader/>
            <ExperimentOneUserForm/>
            <button onClick={props.isBackButtonClicked}>Back to Main Arena</button>
        </div>
    );
}

export default ExperimentOne;