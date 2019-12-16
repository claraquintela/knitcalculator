import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

  handleDeletePattern = async id => {
    if (!confirm("Are you sure you want delete this pattern?")) {
      return;
    }
    let data = new FormData();
    data.append("id", id);
    let response = await fetch("/deletepattern", {
      method: "POST",
      body: data
    });
    let responseBody = await response.text();
    let parsed = JSON.parse(responseBody);
    console.log("patterns", parsed.patterns);
    this.props.dispatch({
      type: "delete-pattern",
      id: id
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
            Your patterns:{" "}
            {this.props.patterns.map((p, i) => {
              if (p.dataSock) {
                return (
                  <div>
                    <Link to={"/patterns/" + p._id + "---sock"}>
                      <li key={i}>
                        {p.dataSock.type + " for " + p.dataSock.title}
                      </li>
                    </Link>

                    <button
                      className="deletebutton"
                      onClick={() => {
                        this.handleDeletePattern(p._id);
                      }}
                    >
                      delete this pattern
                    </button>
                  </div>
                );
              }
              if (p.dataMittens) {
                return (
                  <div>
                    <Link to={"/patterns/" + p._id + "---mittens"}>
                      <li key={i}>
                        {p.dataMittens.type + " for " + p.dataMittens.title}
                      </li>
                    </Link>

                    <button
                      className="deletebutton"
                      onClick={() => {
                        this.handleDeletePattern(p._id);
                      }}
                    >
                      delete this pattern
                    </button>
                  </div>
                );
              }
              if (p.dataScarf) {
                return (
                  <div>
                    <Link to={"/patterns/" + p._id + "---scarf"}>
                      <li key={i}>
                        {p.dataScarf.type + " for " + p.dataScarf.title}
                      </li>
                    </Link>

                    <button
                      className="deletebutton"
                      onClick={() => {
                        this.handleDeletePattern(p._id);
                      }}
                    >
                      delete this pattern
                    </button>
                  </div>
                );
              }
              if (p.dataBabyBlanket) {
                return (
                  <div>
                    <Link to={"/patterns/" + p._id + "---babyblanket"}>
                      <li key={i}>
                        {p.dataBabyBlanket.type +
                          " for " +
                          p.dataBabyBlanket.title}
                      </li>
                    </Link>
                    <button
                      className="deletebutton"
                      onClick={() => {
                        this.handleDeletePattern(p._id);
                      }}
                    >
                      delete this pattern
                    </button>
                  </div>
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
