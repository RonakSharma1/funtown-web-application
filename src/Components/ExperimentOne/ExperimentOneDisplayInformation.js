import React, { useState } from "react";
import BoredAPICaller from "../../ApiTemplates/BoredAPICaller.js";
import ExperimentOneUserForm from "./ExperimentOneUserForm.js";

const ExperimentOneDisplayInformation = (props) => {
  const [userName, setUserName] = useState("");
  const roboHashUrl = `https://robohash.org/${userName}.png?size=200x200`;

  const [submitButtonState, setSubmitButtonState] = useState(false);
  const [userActivityType, setUserActivityType] = useState("social");
  const [userActivityDescription, setUserActivityDescription] = useState(
    "Stare at wall"
  );

  const userOutputMessage = `Hey ${userName}. Based on what you have told me, I would suggest doing something along the lines of ${userActivityType}.  
  Therefore, maybe try ${userActivityDescription.toLowerCase()}. FYI, that avatar you see below, that's how you would look like in a robot apocalypse \u2728 `;

  const [numberOfParticipants, setNumberOfParticipants] = useState(1);

  const storeUserPreferencesFromApi = (
    userActivityFromApi,
    userActivityTypeFromApi
  ) => {
    setUserActivityType(userActivityTypeFromApi);
    setUserActivityDescription(userActivityFromApi);
  };

  const storeFormData = (
    userNameFromForm,
    numberOfParticipants,
    isSubmitPressed
  ) => {
    setUserName(userNameFromForm);
    setSubmitButtonState(isSubmitPressed);
    setNumberOfParticipants(numberOfParticipants);
  };

  return (
    <React.Fragment>
      <ExperimentOneUserForm userInfoFormData={storeFormData} />
      {submitButtonState && (
        <BoredAPICaller
          isSubmitButtonPressed={submitButtonState}
          numberOfParticipants={numberOfParticipants}
          userRecommendationsFromApi={storeUserPreferencesFromApi}
        />
      )}
      {submitButtonState && (
        <div>
          <p>{userOutputMessage}</p>
          <img src={roboHashUrl} alt={"Robot Avatar"} />
        </div>
      )}
    </React.Fragment>
  );
};

export default ExperimentOneDisplayInformation;
