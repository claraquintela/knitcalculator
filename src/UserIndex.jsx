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
              if (p.dataSock) {
                return (
                  <Link to={"/patterns/" + p._id + "---sock"}>
                    <li key={i}>
                      {p.dataSock.type + " for " + p.dataSock.title}
                    </li>
                  </Link>
                );
              }
              if (p.dataMittens) {
                return (
                  <Link to={"/patterns/" + p._id + "---mittens"}>
                    <li key={i}>
                      {p.dataMittens.type + " for " + p.dataMittens.title}
                    </li>
                  </Link>
                );
              }
              if (p.dataBabyBlanket) {
                return (
                  <Link to={"/patterns/" + p._id + "---babyblanket"}>
                    <li key={i}>
                      {p.dataBabyBlanket.type +
                        " for " +
                        p.dataBabyBlanket.title}
                    </li>
                  </Link>
                );
              }
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
