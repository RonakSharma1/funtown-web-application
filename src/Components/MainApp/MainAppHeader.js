import "../../CSS/MainApp/MainAppHeader.css";
import party from "../../Media/party.gif";

const Header = () => {
  return (
    <div className="header">
      <img
        src={party}
        className="party_image_right"
        alt="Minions dancing in a party"
      />
      <img
        src={party}
        className="party_image_left"
        alt="Minions dancing in a party"
      />
      <h1>Welcome to the FunTown!</h1>
      <a
        className="header"
        href="https://youtu.be/k85mRPqvMbE"
        target="_blank"
        rel="noreferrer"
      >
        Synergising Fun and Work
      </a>
      <p>
        Aim: To experiment with React, Axios and Express for understanding web
        development
      </p>
    </div>
  );
};
export default Header;
