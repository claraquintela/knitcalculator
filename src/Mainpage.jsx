import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import "./mainpage.css";

class UnconnectedMainPage extends Component {
  render = () => {
    return (
      <div className="grid">
        <Header />
        <div className="knit">
          <Login />
        </div>
        <Footer />
      </div>
    );
  };
}

// let MainPage = connect(mapStateToProps)(UnconnectedMainPage);
export default UnconnectedMainPage;
