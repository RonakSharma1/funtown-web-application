import { useState } from "react";

function ExperimentOneUserForm(props) {
  const listOfParticipants = [1, 2, 3, 4, 5];
  const [userName, setUserName] = useState("");
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    setIsSubmitPressed(false);
  };
  const handleNumberOfParticipants = (event) => {
    setNumberOfParticipants(event.target.value);
    setIsSubmitPressed(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitPressed(true);
    props.userInfoFormData(userName, numberOfParticipants);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What is your name:
          <input name="userName" type="text" onChange={handleUserNameChange} />
        </label>
        <br />
        <label>
          Lets find your unique character something fun to do. How many friends
          do you wanna enjoy with:
          <select onChange={handleNumberOfParticipants}>
            {listOfParticipants.map((participant) => (
              <option key={participant} value={participant}>
                {parseInt(participant)}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: isSubmitPressed ? "orange" : "black" }}>
        Testing for Inline Styling
      </p>
    </div>
  );
}
export default ExperimentOneUserForm;
