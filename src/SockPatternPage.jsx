import React, { Component } from "react";
import "./homepage.css";
import PatternForm from "./PatternForm.jsx";
import SockPattern from "./SockPattern.jsx";
import { connect } from "react-redux";

class UnconnectedSockPatternPage extends Component {
  render = () => {
    return (
      <div className="box">
        <div className="container">
          <h3>
            {this.props.title !== ""
              ? "Socks for " + this.props.title
              : "Socks"}
          </h3>
          <div className="horizontalbar"></div>
          <div className="containertxt">
            <PatternForm />
            <div className="whitepage">
              {this.props.title !== "" ? <SockPattern /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    title: state.data.title
  };
};
let SockPatternPage = connect(mapStateToProps)(UnconnectedSockPatternPage);
export default SockPatternPage;
