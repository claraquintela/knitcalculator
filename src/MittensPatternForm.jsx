import React, { Component } from "react";
import { connect } from "react-redux";
import "./patternform.css";

class UnconnectedMittensPatternForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Mittens",
      title: "",
      stitches: 0,
      rows: 0,
      handcirc: 0,
      chosenPattern: undefined,
      needle: "",
      yarn: ""
    };
  }

  componentDidMount = () => {
    if (this.props.id !== undefined) {
      let chosenPattern = this.props.patterns.find(pattern => {
        return pattern._id === this.props.id;
      });
      this.setState({ ...chosenPattern.dataMittens });
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
  handleHandcirc = event => {
    this.setState({ handcirc: Number(event.target.value) });
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
      this.state.handcirc <= 0 ||
      this.state.needle === "" ||
      this.state.yarn === ""
    ) {
      alert("you're missing something");
      return;
    }
    return this.props.dispatch({
      type: "dataMittens-submitted",
      dataMittens: {
        type: this.state.type,
        title: this.state.title,
        stitches: this.state.stitches,
        rows: this.state.rows,
        handcirc: this.state.handcirc,
        needle: this.state.needle,
        yarn: this.state.yarn
      }
    });
  };
  render = () => {
    console.log("pattern id", this.props.id);
    if (this.props.id === undefined) {
      return (
        <div>
          <div className="warning">
            <div>* All fields must be filled in</div>
            <div>* Decimals must be separated with a ".". Exemple: 3.6</div>
          </div>
          <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
            <input
              type="text"
              placeholder="Whose mittens are these?"
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
              placeholder="Hand circumference"
              onChange={this.handleHandcirc}
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
          <div>Decimals must be separated with a ".". Exemple: 3.6</div>
        </div>
        <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
          <input type="text" defaultValue={this.state.title} />
          <input type="text" defaultValue={this.state.yarn} />
          <input type="text" defaultValue={this.state.needle} />
          <input type="text" defaultValue={this.state.stitches} />
          <input type="text" defaultValue={this.state.rows} />
          <input type="text" defaultValue={this.state.handcirc} />
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
let MittensPatternForm = connect(mapsStateToProps)(
  UnconnectedMittensPatternForm
);
export default MittensPatternForm;
