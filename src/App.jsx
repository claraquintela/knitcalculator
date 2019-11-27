import { connect } from "react-redux";
// import "./app.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./Mainpage.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

class UnconnectedApp extends Component {
  renderMainPage = () => {
    return (
      <div>
        <MainPage />
      </div>
    );
  };

  renderSignup = () => {
    return (
      <div>
        <Signup />+
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div>
        <Login />
      </div>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={this.renderMainPage} />
          <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route exact={true} path="/login" render={this.renderLogin} />
          <Route
            exact={true}
            path="/userPage/:_id"
            render={this.renderUserPage}
          />
          <Route
            exact={true}
            path="/addNewProduct"
            render={this.renderNewProduct}
          />
        </div>
      </BrowserRouter>
    );
  };
}

// let App = connect(mapStateToProps)(UnconnectedApp);

export default UnconnectedApp;
