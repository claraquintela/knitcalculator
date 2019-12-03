import React, { Component } from "react";
import { connect } from "react-redux";
import "./homepage.css";
import UserBar from "./UserBar.jsx";
import UserIndex from "./UserIndex.jsx";
import NewPattern from "./NewPattern.jsx";

class UnconnectePatternPage extends Component {
  render = () => {
    return (
      <div className="box">
        <div className="container">
          <UserBar />
          <div className="horizontalbar"></div>
          <div className="homepage">
            <div>
              <PatternForm />
            </div>
            <div className="whitepage">
              <Pattern />
            </div>
          </div>
        </div>
      </div>
    );
  };
}
let PatternPage = connect()(UnconnectedPatternPage);
export default PatternPage;
