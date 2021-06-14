import Button from "../ReUsableUIs/Button.js";
import "../../CSS/ExperimentTwo/ModalStyle.css";

const FilmDescriptionPopUp = (props) => {
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="CloseLayout">
          <p>{props.filmDescription}</p>
          <Button textToDisplay="Close" onClickListener={props.handleClose} />
        </div>
      </section>
    </div>
  );
};
export default FilmDescriptionPopUp;
