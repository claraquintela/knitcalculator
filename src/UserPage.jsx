import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./userpage.css";

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
        <div></div>
      </div>
    );
  };
}
let UserPage = connect()(UnconnectedUserPage);
export default UserPage;
