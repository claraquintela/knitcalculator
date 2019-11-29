import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./homepage.css";

class UnconnectedUserBar extends Component {
  render = () => {
    return (
      <div>
        <h2 className="title">Hello, {this.props.username}</h2>
        <h3 className="subtitle">
          Revisite your patterns or start a new adventure
        </h3>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    username: state.username
  };
};
let UserBar = connect(mapStateToProps)(UnconnectedUserBar);
export default UserBar;
