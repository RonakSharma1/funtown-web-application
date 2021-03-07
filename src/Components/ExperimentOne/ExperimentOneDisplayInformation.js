import React, { useState } from "react";
import BoredAPICaller from "../../ApiTemplates/BoredAPICaller.js";
import ExperimentOneUserForm from "./ExperimentOneUserForm.js";

const ExperimentOneDisplayInformation = (props) => {
  const [userName, setUserName] = useState("");
  // const roboHashUrl = "https://robohash.org/" + userName + ".png?size=200x200";

  const [submitButtonState, setSubmitButtonState] = useState(false);
  const [userActivityType, setUserActivityType] = useState("social");
  const [userActivityDescription, setUserActivityDescription] = useState(
    "Stare at wall"
  );

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
      {/* <img src={roboHashUrl} alt={"Robot Avatar"} /> */}
    </div>
  );
};

export default ExperimentOneDisplayInformation;
