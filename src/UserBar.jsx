import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class UnconnectedUserBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }
  render = () => {
    return <div></div>;
  };
}
let UserBar = connect()(UnconnectedUserBar);
export default UserBar;
