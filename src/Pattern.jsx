import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import "./userpage.css";

class UnconnectedPattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stitches: 0,
      foot: 0
    };
  }
  handleStitches = event => {
    this.setState({ stitches: parseInt(event.target.value) });
  };
  handleFoot = event => {
    this.setState({ username: parseInt(event.target.value) });
  };

  handleSubmitPattern = async evt => {
    evt.preventDefault();

    let data = new FormData();
    data.append("stitches", this.state.stitches);
    data.append("foot", this.state.foot);
    let response = await fetch("/pattern", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();

    let body = JSON.parse(responseBody);

    if (!body.success) {
      alert("login failed");
      return;
    }
    this.props.dispatch({
      type: "login-success",
      username: this.state.username
    });

    alert("login successful");
    this.setState({ redirect: true });
  };
  render = () => {
    return (
      <div>
        <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
          <input
            type="text"
            placeholder="Sts in 10cm"
            onChange={this.handleStitches}
          />
          <input
            type="text"
            placeholder="Foot circumference"
            onChange={this.handleFoot}
          />
          <button>login</button>
        </form>
      </div>
    );
  };
}
// let UserPage = connect()(UnconnectedUserPage);
export default UnconnectedPattern;
