function ExperimentOne(props){

    return(
        <div>
            <h1>Welcome to Experiment 1</h1>
            <button onClick={props.isBackButtonClicked}>Back to Main Arena</button>
        </div>
    );
}

export default ExperimentOne;