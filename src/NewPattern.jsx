import React, { Component } from "react";
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
    alert(`You chose ${this.state.type} pattern.`);
    if (this.state.type === "socks") {
      this.props.history.push("/SockPatternPage");
    }
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
            {/* <input
              type="radio"
              value="mittens"
              checked={this.state.type === "mittens"}
              onChange={this.handleChange}
            />{" "} */}
            Mittens (coming soon){" "}
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

export default withRouter(UnconnectedNewPattern);
