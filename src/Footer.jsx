import React, { Component } from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedFooter extends Component {
  render = () => {
    return (
      <div className="header">
        <div className="bar">
          <div className="text">ClaraQuintela 2019. ALL RIGHTS RESERVED</div>
        </div>
      </div>
    );
  };
}

export default UnconnectedFooter;
