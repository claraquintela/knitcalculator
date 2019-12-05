import React, { Component } from "react";
import { connect } from "react-redux";
import "./homepage.css";
import UserBar from "./UserBar.jsx";
import UserIndex from "./UserIndex.jsx";
import NewPattern from "./NewPattern.jsx";

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
          <div className="homepage">
            <UserIndex />
            <NewPattern className="whitepage" />
          </div>
        </div>
      </div>
    );
  };
}
let UserPage = connect()(UnconnectedUserPage);
export default UserPage;
