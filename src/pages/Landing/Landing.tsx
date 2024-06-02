import "./landing.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="boxtop">
          <p>pick your poison</p>
        </div>
        <div className="boxcenter">
          <div className="linkcontainer">
            <div className="link">
              <Link to={"/login"}>log into your account</Link>
            </div>
          </div>
          <div className="spacer">
            <p>or</p>
          </div>
          <div className="linkcontainer">
            <div className="link">
              <Link to={"/register"}>create a new one</Link>
            </div>
          </div>
        </div>
        <div className="boxbottom">
          <p>
            made by two of the best web developers on the PLANET please hire me
          </p>
        </div>
      </div>
    </div>
  );
};
