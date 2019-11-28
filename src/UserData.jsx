import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import "./userpage.css";

class UnconnectedPattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stitches: 0,
      rows: 0,
      footcirc: 0,
      footlength: 0
    };
  }
  handleStitches = event => {
    this.setState({ stitches: parseInt(event.target.value) });
  };
  handleRows = event => {
    this.setState({ rows: parseInt(event.target.value) });
  };
  handleFootcirc = event => {
    this.setState({ footcirc: parseInt(event.target.value) });
  };
  handleFootlength = event => {
    this.setState({ footlength: parseInt(event.target.value) });
  };
  handleSubmitPattern = async evt => {
    evt.preventDefault();

    let data = new FormData();
    data.append("stitches", this.state.stitches);
    data.append("rows", this.state.rows);
    data.append("footcirc", this.state.footcirc);
    data.append("footlength", this.state.footlength);
    let response = await fetch("/UserData", {
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
            placeholder="Rows in 10cm"
            onChange={this.handleRows}
          />

          <input
            type="text"
            placeholder="Foot circumference"
            onChange={this.handleFootcirc}
          />
          <input
            type="text"
            placeholder="Foot length"
            onChange={this.handleFootlength}
          />
          <button>login</button>
        </form>
      </div>
    );
  };
}
// let UserPage = connect()(UnconnectedUserPage);
export default UnconnectedPattern;
