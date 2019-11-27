import React, { Component } from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedHeader extends Component {
  render = () => {
    return (
      <div className="header">
        <div>
          <img
            src="http://claraquintela.com/wp-content/uploads/2019/11/logo_square.png"
            className="header_img"
          />
        </div>
        <div className="bar"></div>
      </div>
    );
  };
}

// let Header = connect(mapStateToProps)(UnconnectedHeader);
export default UnconnectedHeader;
