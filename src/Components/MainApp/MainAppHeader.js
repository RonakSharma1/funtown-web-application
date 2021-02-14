import '../../CSS/MainApp/MainAppHeader.css';
import party from '../../Media/party.gif'

function Header (props) {
    return(
        <div className="header">
            <img src={party} className="party_image_right" alt="party_right" />
            <img src={party} className="party_image_left" alt="party_left" />
            <h1>Welcome to the FunTown!</h1>
            <a
                className="header"
                href="https://youtu.be/k85mRPqvMbE"
                target="_blank"
                rel="noreferrer"
            >
                Synergising Fun and Work
            </a>
            <p>Aim: To experiment with React, Axios and Express for understanding web development</p>
        </div>
    );
}
export default Header;