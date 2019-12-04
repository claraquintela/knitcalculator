import React, { Component } from "react";
import { connect } from "react-redux";
import "./patternform.css";

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

  handleTitle = event => {
    this.setState({ title: event.target.value });
  };
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
    if (
      this.state.title === "" ||
      this.state.stitches <= 0 ||
      this.state.rows <= 0 ||
      this.state.footcirc <= 0 ||
      this.state.footlength <= 0
    ) {
      alert("you're missing something");
      return;
    }
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
            placeholder="Whose socks are these?"
            onChange={this.handleTitle}
          />
          <input
            type="text"
            placeholder="Sts in 1cm"
            onChange={this.handleStitches}
          />
          <input
            type="text"
            placeholder="Rows in 1cm"
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
          <button>Generate pattern</button>
        </form>
      </div>
    );
  };
}
let PatternForm = connect()(UnconnectedPatternForm);
export default PatternForm;
