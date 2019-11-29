import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class UnconnectedPatternForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      stitches: 0,
      rows: 0,
      footcirc: 0,
      footlength: 0
    };
  }
  handleStitches = event => {
    this.setState({ stitches: parseInt(event.target.value) });
  };
  handleRows = event => {
    this.setState({ rows: parseInt(event.target.value) });
  };
  handleFootcirc = event => {
    this.setState({ footcirc: parseInt(event.target.value) });
  };
  handleFootlength = event => {
    this.setState({ footlength: parseInt(event.target.value) });
  };
  handleSubmitPattern = async evt => {
    evt.preventDefault();
    return this.props.dispatch({
      type: "data-submitted",
      data: {
        title: this.state.title,
        stitches: this.state.stitches,
        rows: this.state.rows,
        footcirc: this.state.footcirc,
        footlength: this.state.length
      }
    });
  };
  render = () => {
    return (
      <div>
        <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
          <input
            type="text"
            placeholder="Sts in 10cm"
            onChange={this.handleStitches}
          />
          <input
            type="text"
            placeholder="Rows in 10cm"
            onChange={this.handleRows}
          />

          <input
            type="text"
            placeholder="Foot circumference"
            onChange={this.handleFootcirc}
          />
          <input
            type="text"
            placeholder="Foot length"
            onChange={this.handleFootlength}
          />
          <button>login</button>
        </form>
      </div>
    );
  };
}
// let UserPage = connect()(UnconnectedUserPage);
export default UnconnectedPatternForm;
