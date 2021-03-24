const Button = ({ textToDisplay, onClickListener }) => {
  const backButtonStyle = {
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    margin: "20px 500px",
  };
  return (
    <button style={backButtonStyle} onClick={onClickListener}>
      {textToDisplay}
    </button>
  );
};

export default Button;
