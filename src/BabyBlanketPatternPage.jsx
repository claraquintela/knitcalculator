import React, { Component } from "react";
import "./sockpatternpage.css";
import BabyBlanketPatternForm from "./BabyBlanketPatternForm.jsx";
import BabyBlanketPattern from "./BabyBlanketPattern.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedBabyBlanketPatternPage extends Component {
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
            {this.props.dataBabyBlanket.title !== undefined
              ? this.props.dataBabyBlanket.type +
                " for " +
                this.props.dataBabyBlanket.title
              : "Baby Blanket"}
          </h3>
          <div className="horizontalbar"></div>
          <div className="containertxt">
            <BabyBlanketPatternForm id={this.props.id} />
            <div className="whitepage">
              {this.props.dataBabyBlanket.title !== undefined ? (
                <div>
                  <BabyBlanketPattern
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
    dataBabyBlanket: state.dataBabyBlanket,
    patterns: state.patterns,
    username: state.username
  };
};
let BabyBlanketPatternPage = connect(mapStateToProps)(
  UnconnectedBabyBlanketPatternPage
);
export default BabyBlanketPatternPage;
