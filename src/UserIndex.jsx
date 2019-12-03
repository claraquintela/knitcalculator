import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./userindex.css";

class UnconnectedUserIndex extends Component {
  render = () => {
    return (
      <div className="grid">
        <div>
          <h3 className="patternList">
            {" "}
            Your patterns:
            <li></li>
          </h3>
        </div>
      </div>
    );
  };
}

export default UnconnectedUserIndex;
