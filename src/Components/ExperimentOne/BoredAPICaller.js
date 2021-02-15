import axios from 'axios';
import React, { useEffect} from 'react';

function BoredAPICaller(props){
    const boredApiUrl="http://www.boredapi.com/api/activity/"
    useEffect(()=>{
        const boredApiData= async () =>{
            await axios.get(boredApiUrl, {
            params: {
                // type: props.userActivity,
                participants:props.numberOfParticipants
            }})
        .then(response =>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error.message);
        })
    } 
        boredApiData()
    },[props.isSubmitPressed]); // Removing the array doesn't work as no element here will 
                                // undergo re-rendering as the useEffect would never be called. Hence
                                // the props.attribute is used to fetch API when those changes
    return(
        <div>
        </div>
    );
}
export default BoredAPICaller;


//useEffect: Function inside this hook is automatically rendered when the DOM renders
// Three ways, first: every time DOM renders, second: when value inside array changes
// third; only on first rendering by declaring an empty array 