import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class UnconnectedSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      subscription: false
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleCheckboxChange = event => {
    this.setState({ subscription: event.target.checked });
  };
  signupSubmitHandler = async event => {
    console.log("signup1");
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("email", this.state.email);
    data.append("subscription", this.state.subscription);
    let response = await fetch("/signup", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    console.log("Signup response", response);
    let responseBody = await response.text();
    console.log("Signup responseBody", responseBody);
    let body = JSON.parse(responseBody);
    console.log("SIGNNNNUP BODY", body);
    if (!body.success) {
      alert("Signup failed! This knitty username is taken, choose another!");
      return;
    }
    alert("Signup is successful! Welcome to the Knitting Calculator!");
    this.setState({ username: "", password: "", email: "" });
    this.props.dispatch({
      type: "login-success",
      username: this.state.username,
      patterns: []
    });
  };
  render() {
    if (this.props.loggedIn) return <Redirect to="/" />;
    return (
      <div>
        <Header />
        <div className="background">
          <div className="login-page">
            <div className="form">
              <form className="login-form" onSubmit={this.signupSubmitHandler}>
                <input
                  type="text"
                  placeholder="name"
                  onChange={this.handleUsernameChange}
                  value={this.state.username}
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                />
                <input
                  type="text"
                  placeholder="email address"
                  onChange={this.handleEmail}
                  value={this.state.email}
                />
                <div className="checkbox">
                  <input type="checkbox" onChange={this.handleCheckboxChange} />
                  <div className="subscribe">Subscribe to my newsletter</div>
                </div>
                <button>Sign up</button>
                <div className="message">
                  Already registered?{" "}
                  <Link className="link" to="/">
                    {" "}
                    <div className="link">Log in</div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
let mapStateToProp = state => {
  return {
    loggedIn: state.loggedIn
  };
};

let SignupForm = connect(mapStateToProp)(UnconnectedSignupForm);
export default SignupForm;
