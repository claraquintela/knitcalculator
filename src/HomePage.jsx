import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./homepage.css";
import UserBar from "./UserBar.jsx";
import UserIndex from "./UserIndex.jsx";

class UnconnectedUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }
  render = () => {
    return (
      <div className="box">
        <div className="container">
          <UserBar />
          <div className="horizontalbar"></div>
          <UserIndex />
        </div>
      </div>
    );
  };
}
let UserPage = connect()(UnconnectedUserPage);
export default UserPage;
