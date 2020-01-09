import React, { Component } from "react";
import { connect } from "react-redux";
import "./patternform.css";

class UnconnectedBabyBlanketPatternForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Baby Blanket",
      title: "",
      stitches: 0,
      rows: 0,
      width: 0,
      height: 0,
      needle: "",
      yarn: "",
      chosenPattern: undefined
    };
  }

  componentDidMount = () => {
    if (this.props.id !== undefined) {
      let chosenPattern = this.props.patterns.find(pattern => {
        return pattern._id === this.props.id;
      });
      this.setState({ ...chosenPattern.dataBabyBlanket });
    }
  };

  handleTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleStitches = event => {
    this.setState({ stitches: Number(event.target.value) });
  };
  handleRows = event => {
    this.setState({ rows: Number(event.target.value) });
  };
  handleWidth = event => {
    this.setState({ width: Number(event.target.value) });
  };
  handleHeight = event => {
    this.setState({ height: Number(event.target.value) });
  };
  handleYarn = event => {
    this.setState({ yarn: event.target.value });
  };
  handleNeedle = event => {
    this.setState({ needle: event.target.value });
  };

  handleSubmitPattern = async evt => {
    console.log("submitting pattern");
    if (evt !== undefined) {
      evt.preventDefault();
    }

    if (
      this.state.title === "" ||
      this.state.stitches <= 0 ||
      this.state.rows <= 0 ||
      this.state.width <= 0 ||
      this.state.height <= 0 ||
      this.state.needle === "" ||
      this.state.yarn === ""
    ) {
      alert("you're missing something");
      return;
    }
    return this.props.dispatch({
      type: "dataBabyBlanket-submitted",
      dataBabyBlanket: {
        type: this.state.type,
        title: this.state.title,
        stitches: this.state.stitches,
        rows: this.state.rows,
        width: this.state.width,
        height: this.state.height,
        needle: this.state.needle,
        yarn: this.state.yarn
      }
    });
  };
  render = () => {
    if (this.props.id === undefined) {
      return (
        <div>
          <div className="warning">
            <div>* All fields must be filled in</div>
            <div>* Decimals must be separated with a ".". Example: 3.6</div>
          </div>
          <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
            <input
              type="text"
              placeholder="Whose baby blanket are these?"
              onChange={this.handleTitle}
            />
            <input
              type="text"
              placeholder="What yarn did you use?"
              onChange={this.handleYarn}
            />
            <input
              type="text"
              placeholder="What needle size?"
              onChange={this.handleNeedle}
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
              placeholder="Total width (in cm)"
              onChange={this.handleWidth}
            />
            <input
              type="text"
              placeholder="Total height (in cm)"
              onChange={this.handleHeight}
            />
            <button>Generate pattern</button>
          </form>
        </div>
      );
    }
    if (this.state.title === "") {
      return <div>loading...</div>;
    }
    this.handleSubmitPattern();
    return (
      <div>
        <div className="warning">
          <div>*All fields must be filled in</div>
          <div>Decimals must be separated with a ".". example: 3.6</div>
        </div>
        <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
          <input type="text" defaultValue={this.state.title} />
          <input type="text" defaultValue={this.state.yarn} />
          <input type="text" defaultValue={this.state.needle} />
          <input type="text" defaultValue={this.state.stitches} />
          <input type="text" defaultValue={this.state.rows} />
          <input type="text" defaultValue={this.state.width} />
          <input type="text" defaultValue={this.state.height} />
          <button>Generate pattern</button>
        </form>
      </div>
    );
  };
}

let mapsStateToProps = state => {
  return {
    patterns: state.patterns,
    username: state.username
  };
};
let BabyBlanketPatternForm = connect(mapsStateToProps)(
  UnconnectedBabyBlanketPatternForm
);
export default BabyBlanketPatternForm;
