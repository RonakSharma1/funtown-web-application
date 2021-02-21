import axios from 'axios';
import React, { useEffect} from 'react';

function BoredAPICaller(props){
    const expressServerBoredApiUrl="http://localhost:5000/boredApi"

    useEffect(()=>{
        ( async () =>{
            try{
                const boredApiData= await axios.get(expressServerBoredApiUrl, {
                    params: {
                        participants:props.numberOfParticipants
            }}) 
            console.log(boredApiData.data.activity+boredApiData.data.type+boredApiData.data.participants);
            props.userRecommendationsFromApi(boredApiData.data.activity,boredApiData.data.type);
        } catch (error){
            console.log(error.message)
            }
        })();
    },[props.isSubmitPressed]); // Removing the array doesn't work as no element here will 
                                // undergo re-rendering as the useEffect would never be called. Hence
                                // the props.attribute is used to fetch API when those changes
    return(
        <div/>
    );
}
export default BoredAPICaller;


//useEffect: Function inside this hook is automatically rendered when the DOM renders
// Three ways, first: every time DOM renders, second: when value inside array changes
// third; only on first rendering by declaring an empty array