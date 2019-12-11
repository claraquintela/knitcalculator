import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./homepage.css";

class UnconnectedUserBar extends Component {
  logoutHandler = evt => {
    fetch("/logout", { method: "POST", body: "", creditals: "include" });
    this.props.dispatch({ type: "logout" });
    alert("You have logged out. See you soon!");
  };

  render = () => {
    return (
      <div>
        <div onClick={this.logoutHandler}>
          <img
            width="40px"
            className="logout"
            src="http://claraquintela.com/wp-content/uploads/2019/11/pngfind.com-logout-button-png-3396821.png"
          />
          <div className="logout">log out</div>
        </div>
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
