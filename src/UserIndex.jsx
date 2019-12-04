import React, { Component } from "react";
import { connect } from "react-redux";
import "./userindex.css";

class UnconnectedUserIndex extends Component {
  render = () => {
    return (
      <div className="grid">
        <div>
          <h3 className="patternList">
            {" "}
            Your patterns:
            {this.props.patterns.map((p, i) => {
              return <li key={i}>{p.title}</li>;
            })}
          </h3>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    patterns: state.patterns
  };
};

let UserIndex = connect(mapStateToProps)(UnconnectedUserIndex);
export default UserIndex;
