import React, { Component } from "react";
import "./sockpatternpage.css";
import ScarfPatternForm from "./ScarfPatternForm.jsx";
import ScarfPattern from "./ScarfPattern.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedScarfPatternPage extends Component {
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
            {this.props.dataScarf.title !== undefined
              ? this.props.dataScarf.type + " for " + this.props.dataScarf.title
              : "Scarf"}
          </h3>
          <div className="horizontalbar"></div>
          <div className="containertxt">
            <ScarfPatternForm id={this.props.id} />
            <div className="whitepage">
              {this.props.dataScarf.title !== undefined ? (
                <div>
                  <ScarfPattern
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
    dataScarf: state.dataScarf,
    patterns: state.patterns,
    username: state.username
  };
};
let ScarfPatternPage = connect(mapStateToProps)(UnconnectedScarfPatternPage);
export default ScarfPatternPage;
