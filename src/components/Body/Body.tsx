import { Instagram, Facebook, ArrowRight } from "react-bootstrap-icons";
import Main from "../../images/main.jpg";

import "./Body.scss";
const Body = () => {
  return (
    <div className="body-container">
      <div className="bg-logo">
        <div className="bg-logo-N">N</div>
        <div className="bg-logo-S">S</div>
      </div>
      <div
        className="social-links"
        onClick={() => {
          window.location.href = "https://www.instagram.com/nsonehundredd/";
        }}
      >
        <p>INSTAGRAM</p>
        <Instagram size="23" />
      </div>
      <img className="main-img" src={Main} />
      <div className="main-section">
        <div className="header">
          NoStylist <div className="logo">NS</div>
          <b>PREMIUM</b>
        </div>
        <div className="sub-header">
          <div className="line"></div>
          STYLE
        </div>
        <div className="body">
          <div className="intro">
            No CO signs staying all the way 100. Changing the game with the
            <br /> WalkOfStyle
            <br />
            <i>Cargo drop out now</i>
          </div>
          <button
            onClick={() => {
              window.location.href = "https://www.instagram.com/nsonehundredd/";
            }}
          >
            Read More <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
