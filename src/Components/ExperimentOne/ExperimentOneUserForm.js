import React, { useState } from 'react';
import BoredAPICaller from './BoredAPICaller.js'
 
function DisplayUserRecommendationBasedOnQuery(userActivityFromApi,userActivityTypeFromApi){
    alert("Hey XYZ. Based on what you have told me, I would suggest doing something along the lines of " +
    userActivityTypeFromApi + ". Therefore, maybe try "+userActivityFromApi);
}

function ExperimentOneUserForm(props){

    const activityTypes=["social", "recreational", "busywork", "diy", "charity", "cooking", "relaxation", "music", "educational"];
    const [userName,setUserName]=useState("");
    const [numberOfParticipants,setNumberOfParticipants]=useState("1");
    const [isSubmitPressed,setIsSubmitPressed]=useState(false);
    const [userActivity,setUserActivity]=useState("social");

    const handleUserNameChange=(event)=>{
        setUserName(event.target.value)
        setIsSubmitPressed(false);
    }
    const handleNumberOfParticipants=(event)=>{
        setNumberOfParticipants(event.target.value)
        setIsSubmitPressed(false);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        let randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
        setUserActivity(randomActivity);
        setIsSubmitPressed(true);
        // alert("The user is called "+userName+" and number of friends free today are "+numberOfParticipants+ 
        // ". Based on your personality, I would suggest doing something "+randomActivity);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    What is your name: 
                    <input name="userName" type="text" onChange={handleUserNameChange}/>
                </label>
                <br />
                <label>
                Lets find your unique character something fun to do.
                How many friends do you wanna enjoy with:
                    <select onChange={handleNumberOfParticipants}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
            {isSubmitPressed && <BoredAPICaller 
            isSubmitPressed={isSubmitPressed} 
            numberOfParticipants={numberOfParticipants}
            userActivity={userActivity}
            userRecommendationsFromApi={DisplayUserRecommendationBasedOnQuery}/>
            }
            {/* {isSubmitPressed && <DisplayUserRecommendationBasedOnQuery/>} */}
        </div> 
    );
}
export default ExperimentOneUserForm;