import React, { useState, useEffect } from "react";
import BoredAPICaller from "../../ApiTemplates/BoredAPICaller.js";
import ExperimentOneUserForm from "./ExperimentOneUserForm.js";

const ExperimentOneDisplayInformation = () => {
  const [userName, setUserName] = useState("Robot");
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const roboHashUrl = `https://robohash.org/${userName}.png?size=200x200`;

  const [userActivityType, setUserActivityType] = useState("social");
  const [userActivityDescription, setUserActivityDescription] = useState(
    "Stare at wall"
  );

  const userOutputMessage = `Hey ${userName}. Based on what you have told me, I would suggest doing something along the lines of ${userActivityType}.  
  Therefore, maybe try ${userActivityDescription.toLowerCase()}. FYI, that avatar you see below, that's how you would look like in a robot apocalypse \u2728 `;

  const storeFormData = (userNameFromForm, numberOfParticipants) => {
    setUserName(userNameFromForm);
    setNumberOfParticipants(numberOfParticipants);
  };

  // Side Effect: Only after DOM renders, it checks if userName or ParticipantNumber has changed. Then only
  // calls the API. DOM renders only when Submit Button is pressed as then setState is called.
  useEffect(() => {
    (async () => {
      const boredApiData = await BoredAPICaller(numberOfParticipants);
      setUserActivityType(boredApiData.userActivity);
      setUserActivityDescription(boredApiData.userActivityDescription);
    })();
  }, [userName, numberOfParticipants]);

  return (
    <>
      <>
        <ExperimentOneUserForm userInfoFormData={storeFormData} />
      </>
      {userName !== "Robot" && (
        <div>
          <p>{userOutputMessage}</p>
          <img src={roboHashUrl} alt={"Robot Avatar"} />
        </div>
      )}
    </>
  );
};

export default ExperimentOneDisplayInformation;
