import React, { Component } from "react";
import "./sockpatternpage.css";
import SockPatternForm from "./SockPatternForm.jsx";
import SockPattern from "./SockPattern.jsx";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class UnconnectedSockPatternPage extends Component {
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
            {this.props.dataSock.title !== undefined
              ? this.props.dataSock.type + " for " + this.props.dataSock.title
              : "Socks"}
          </h3>
          <div className="horizontalbar"></div>
          <div className="containertxt">
            <SockPatternForm id={this.props.id} />
            <div className="whitepage">
              {this.props.dataSock.title !== undefined ? (
                <div>
                  <SockPattern
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
    dataSock: state.dataSock,
    patterns: state.patterns,
    username: state.username
  };
};
let SockPatternPage = connect(mapStateToProps)(UnconnectedSockPatternPage);
export default SockPatternPage;
