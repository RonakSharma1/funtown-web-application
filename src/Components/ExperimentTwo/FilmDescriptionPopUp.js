import Button from "../common/Button.js";
import "../../CSS/ExperimentTwo/ModalStyle.css";

const FilmDescriptionPopUp = (props) => {
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <p>{props.filmDescription}</p>
        <Button text="Close" onClickListener={props.handleClose} />
      </section>
    </div>
  );
};
export default FilmDescriptionPopUp;
