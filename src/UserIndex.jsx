import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./userindex.css";

class UnconnectedUserIndex extends Component {
  componentDidMount = async () => {
    let data = new FormData();
    data.append("username", this.props.username);
    let response = await fetch("/getPattern", {
      method: "POST",
      body: data
    });
    let responseBody = await response.text();
    let parsed = JSON.parse(responseBody);
    this.props.dispatch({
      type: "update-patterns",
      patterns: parsed.patterns
    });
  };

  downloadPatternById = id => {
    this.props.patterns.filter(id === patterns._id);
  };
  render = () => {
    return (
      <div className="grid">
        <div>
          <h3 className="patternList">
            {" "}
            Your patterns:
            {this.props.patterns.map((p, i) => {
              return (
                <Link to={"/patterns/" + p._id}>
                  <li key={i}>{p.data.type + " for " + p.data.title}</li>
                </Link>
              );
            })}
          </h3>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    patterns: state.patterns,
    username: state.username
  };
};

let UserIndex = connect(mapStateToProps)(UnconnectedUserIndex);
export default UserIndex;
