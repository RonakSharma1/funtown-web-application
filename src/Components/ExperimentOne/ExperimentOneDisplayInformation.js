import React, { useState } from "react";
import BoredAPICaller from "../../ApiTemplates/BoredAPICaller.js";
import ExperimentOneUserForm from "./ExperimentOneUserForm.js";

const ExperimentOneDisplayInformation = (props) => {
  const [userName, setUserName] = useState("");
  const roboHashUrl = "https://robohash.org/" + userName + ".png?size=200x200";

  const [submitButtonState, setSubmitButtonState] = useState(false);
  const [userActivityType, setUserActivityType] = useState("social");
  const [userActivityDescription, setUserActivityDescription] = useState(
    "Stare at wall"
  );

  const userOutputMessage =
    "Hey " +
    userName +
    ". Based on what you have told me, I would suggest doing something along the lines of " +
    userActivityType +
    ". Therefore, maybe try " +
    userActivityDescription.toLowerCase() +
    ". Also look what I found below. This is how you would look in a Robot conquered world \u2728";

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
    <div>
      <ExperimentOneUserForm userInfoFormData={storeFormData} />
      {submitButtonState && (
        <BoredAPICaller
          isSubmitButtonPressed={submitButtonState}
          numberOfParticipants={numberOfParticipants}
          userRecommendationsFromApi={storeUserPreferencesFromApi}
        />
      )}
      {submitButtonState && <p>{userOutputMessage}</p>}
      {submitButtonState && <img src={roboHashUrl} alt={"Robot Avatar"} />}
    </div>
  );
};

export default ExperimentOneDisplayInformation;
