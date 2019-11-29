import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LoginForm from "./LoginForm.jsx";
import HomePage from "./HomePage.jsx";

class UnconnectedLandingPage extends Component {
  render = () => {
    if (this.props.loggedIn) return <HomePage />;
    return (
      <div>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

let LandingPage = connect(mapStateToProps)(UnconnectedLandingPage);
export default LandingPage;
