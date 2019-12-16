import { connect } from "react-redux";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import HomePage from "./HomePage.jsx";
import SockPatternForm from "./SockPatternForm.jsx";
import SockPatternPage from "./SockPatternPage.jsx";
import MittensPatternPage from "./MittensPatternPage.jsx";
import BabyBlanketPatternPage from "./BabyBlanketPatternPage.jsx";
import MittensPatternForm from "./MittensPatternForm.jsx";
import BabyBlanketPatternForm from "./BabyBlanketPatternForm.jsx";
import ScarfPatternForm from "./ScarfPatternForm.jsx";
import ScarfPatternPage from "./ScarfPatternPage.jsx";

class UnconnectedApp extends Component {
  renderPatterns = routerData => {
    let id = routerData.match.params._Id;
    console.log("pattern id", id);
    let path = id.split("---");

    if (path[1] === "sock") {
      return <SockPatternPage id={path[0]} />;
    }
    if (path[1] === "mittens") {
      return <MittensPatternPage id={path[0]} />;
    }
    if (path[1] === "babyblanket") {
      return <BabyBlanketPatternPage id={path[0]} />;
    }
    if (path[1] === "scarf") {
      return <ScarfPatternPage id={path[0]} />;
    }
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/signup" component={SignupForm} />
        <Route exact={true} path="/login" component={LoginForm} />
        <Route exact={true} path="/homepage/:userId" component={HomePage} />
        <Route
          exact={true}
          path="/patterns/:_Id"
          render={this.renderPatterns}
        />
        <Route
          exact={true}
          path="/sockpatternform"
          component={SockPatternForm}
        />
        <Route
          exact={true}
          path="/mittenpatternform"
          component={MittensPatternForm}
        />
        <Route
          exact={true}
          path="/babyblanketpatternform"
          component={BabyBlanketPatternForm}
        />
        <Route
          exact={true}
          path="/Scarfpatternform"
          component={ScarfPatternForm}
        />
        <Route
          exact={true}
          path="/SockPatternPage"
          component={SockPatternPage}
        />
        <Route
          exact={true}
          path="/MittensPatternPage"
          component={MittensPatternPage}
        />
        <Route
          exact={true}
          path="/BabyBlanketPatternPage"
          component={BabyBlanketPatternPage}
        />
        <Route
          exact={true}
          path="/ScarfPatternPage"
          component={ScarfPatternPage}
        />
      </BrowserRouter>
    );
  };
}

// let App = connect(mapStateToProps)(UnconnectedApp);

export default UnconnectedApp;
