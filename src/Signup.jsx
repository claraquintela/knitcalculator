import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleUserLocation = event => {
    this.setState({ location: event.target.value });
  };
  userImgHandler = event => {
    console.log("image handler", event.target.files[0]);
    this.setState({ img: event.target.files[0] });
  };
  signupSubmitHandler = async event => {
    event.preventDefault();
    console.log("this.state.image", this.state.image);
    let data = new FormData();

    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("email", this.state.email);
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
      alert("Signup failed! This crafty username is taken, choose another!");
      return;
    }
    alert("Signup is successful! Welcome to CraftyPeople!!");
    this.setState({ username: "", password: "", location: "", img: null });
    this.props.dispatch({
      type: "login-success",
      username: this.state.username
    });
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <div>
        <Header />
        <div className="background">
          <div className="login-page">
            <div className="form">
              <form
                onSubmit={this.signupSubmitHandler}
                className="register-form"
              >
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
                <button onSubmit={this.handleSubmit}>create</button>
                <div className="message">
                  Already registered?{" "}
                  <Link className="link" to="/login">
                    Log in
                  </Link>
                </div>
              </form>
              <form className="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email" />
                <button>Sign up</button>
                <div className="message">
                  Already registered?{" "}
                  <Link className="link" to="/">
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
let Signup = connect()(UnconnectedSignup);
export default Signup;
