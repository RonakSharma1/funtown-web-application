import React, { useState } from 'react';
 
function ExperimentOneUserForm(props){

    const [userName,setUserName]=useState("");
    const [userFood,setUserFood]=useState("");

    const handleUserNameChange=(event)=>{
        setUserName(event.target.value)
    }
    const handleFoodChange=(event)=>{
        setUserFood(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("The user is called "+userName+" and his favourite food is "+userFood);
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
                    What is your desirable food from the list:
                    <select onChange={handleFoodChange}>
                    <option value="pizza">Pizza</option>
                    <option value="burger">Burger</option>
                    <option value="pasta">Pasta</option>
                    <option value="cheesecake">Cheesecake</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div> 
    );
}
export default ExperimentOneUserForm;