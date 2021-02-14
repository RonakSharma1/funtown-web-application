import React, { useState } from 'react';
 
function ExperimentOneUserForm(props){

    const activityTypes=["social", "recreational", "busywork", "diy", "charity", "cooking", "relaxation", "music", "educational"];
    const [userName,setUserName]=useState("");
    const [numberOfParticipants,setNumberOfParticipants]=useState("");

    const handleUserNameChange=(event)=>{
        setUserName(event.target.value)
    }
    const handleNumberOfParticipants=(event)=>{
        setNumberOfParticipants(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        let randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
        alert("The user is called "+userName+" and number of friends free today are "+numberOfParticipants+ 
        ". Based on your personality, I would suggest doing something "+randomActivity);
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
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    </select>
                </label>
                <br />
                <label>


                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div> 
    );
}
export default ExperimentOneUserForm;