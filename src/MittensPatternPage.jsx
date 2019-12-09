import React, { Component } from "react";
import "./sockpatternpage.css";
import MittensPatternForm from "./MittensPatternForm.jsx";
import MittensPattern from "./MittensPattern.jsx";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class UnconnectedMittensPatternPage extends Component {
  componentDidMount = () => {
    return this.props.dispatch({
      type: "reset-data"
    });
  };

  render = () => {
    return (
      <div className="boxintern">
        <Link to={"/"} className="linkhome">
          <img
            width="40px"
            src="http://claraquintela.com/wp-content/uploads/2019/12/—Pngtree—vector-house-icon_4013710.png"
          />{" "}
          back to home
        </Link>
        <div className="container">
          <h3>
            {this.props.dataMittens.title !== undefined
              ? this.props.dataMittens.type +
                " for " +
                this.props.dataMittens.title
              : "Mittens"}
          </h3>
          <div className="horizontalbar"></div>
          <div className="containertxt">
            <MittensPatternForm id={this.props.id} />
            <div className="whitepage">
              {this.props.dataMittens.title !== undefined ? (
                <div>
                  <MittensPattern
                    ref={el => (this.componentRef = el)}
                    id={this.props.id}
                    trigger={() => (
                      <a href="#" className="printbutton">
                        Print
                      </a>
                    )}
                    content={() => this.componentRef}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    dataMittens: state.dataMittens,
    patterns: state.patterns,
    username: state.username
  };
};
let MittensPatternPage = connect(mapStateToProps)(
  UnconnectedMittensPatternPage
);
export default MittensPatternPage;
