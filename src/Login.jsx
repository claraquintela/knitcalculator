import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = async evt => {
    evt.preventDefault();

    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
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
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <div className="background">
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input
                type="text"
                placeholder="name"
                onChange={this.handleUsernameChange}
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.handlePasswordChange}
              />
              {/* <input type="text" placeholder="email address"/> */}
              <button onSubmit={this.handleSubmit}>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <div className="message">
                Not registered?{" "}
                <Link className="link" to="/signup">
                  <div className="signuplink">Create an account</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}
let Login = connect()(UnconnectedLogin);
export default Login;