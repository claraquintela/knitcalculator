import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./userindex.css";

class UnconnectedNewPattern extends Component {
  constructor() {
    super();

    this.state = {
      type: "",
      redirect: false
    };
  }

  handleChange = event => {
    this.setState({
      type: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "new-pattern"
    });
    if (this.state.type === "socks") {
      this.props.history.push("/SockPatternPage");
      alert(`You chose ${this.state.type} pattern.`);
      return;
    }
    if (this.state.type === "mittens") {
      this.props.history.push("/MittensPatternPage");
      alert(`You chose ${this.state.type} pattern.`);
      return;
    }
    if (this.state.type === "babyblanket") {
      this.props.history.push("/BabyBlanketPatternPage");
      return;
    } else alert(`please, pick a pattern.`);
    return;
  };

  render = () => {
    console.log(this.props);
    return (
      <div className="grid">
        <form onSubmit={this.handleSubmit}>
          <h3>What would you like to knit?</h3>{" "}
          <div>
            <input
              type="radio"
              value="socks"
              checked={this.state.type === "socks"}
              onChange={this.handleChange}
            />{" "}
            Socks{" "}
          </div>
          <div>
            <input
              type="radio"
              value="mittens"
              checked={this.state.type === "mittens"}
              onChange={this.handleChange}
            />{" "}
            Mittens{" "}
          </div>{" "}
          <div>
            <input
              type="radio"
              value="babyblanket"
              checked={this.state.type === "babyblanket"}
              onChange={this.handleChange}
            />{" "}
            Simple Baby Blanket{" "}
          </div>{" "}
          <input
            type="submit"
            className="buttonNew"
            value="Start a new pattern"
          />
        </form>
      </div>
    );
  };
}

let NewPattern = connect()(UnconnectedNewPattern);
export default withRouter(NewPattern);
