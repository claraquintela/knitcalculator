import { connect } from "react-redux";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import HomePage from "./HomePage.jsx";
import PatternForm from "./PatternForm.jsx";
import SockPatternPage from "./SockPatternPage.jsx";

class UnconnectedApp extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/signup" component={SignupForm} />
        <Route exact={true} path="/login" component={LoginForm} />
        <Route exact={true} path="/homepage/:userId" component={HomePage} />
        <Route exact={true} path="/patternform" component={PatternForm} />
        <Route
          exact={true}
          path="/SockPatternPage"
          component={SockPatternPage}
        />
      </BrowserRouter>
    );
  };
}

// let App = connect(mapStateToProps)(UnconnectedApp);

export default UnconnectedApp;
