const Button = ({ text, onClickListener, disable }) => {
  var backButtonStyle = {
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    margin: "20px 500px",
  };
  if (disable) {
    backButtonStyle = {
      fontSize: "20px",
      backgroundColor: "grey",
      color: "white",
      margin: "20px 500px",
    };
  }
  return (
    <button
      style={backButtonStyle}
      onClick={onClickListener}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
