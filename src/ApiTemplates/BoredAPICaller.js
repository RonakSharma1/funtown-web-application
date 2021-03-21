import axios from "axios";
// Javascript function instead of a component as API caller should be functions and should be called with useEffect
// Also when returning an empty <div>, it is an indication to convert to a function instead of component
// eslint-disable-next-line import/no-anonymous-default-export
export default async (numberOfParticipants) => {
  const expressServerBoredApiUrl = "http://localhost:5000/boredApi";

  try {
    const boredApiData = await axios.get(expressServerBoredApiUrl, {
      params: {
        participants: numberOfParticipants,
      },
    });
    console.log(
      boredApiData.data.activity +
        boredApiData.data.type +
        boredApiData.data.participants
    );
    return {
      userActivity: boredApiData.data.type,
      userActivityDescription: boredApiData.data.activity,
    };
  } catch (error) {
    console.log(error.message);
  }
};
//useEffect: Function inside this hook is automatically rendered when the DOM renders
// Three ways, first: every time DOM renders, second: when value inside array changes
// third; only on first rendering by declaring an empty array
