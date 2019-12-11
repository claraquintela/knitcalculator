import React, { Component } from "react";
import { connect } from "react-redux";
import "./patternform.css";

class UnconnectedSockPatternForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Socks",
      title: "",
      stitches: 0,
      rows: 0,
      footcirc: 0,
      footlength: 0,
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
      this.setState({ ...chosenPattern.dataSock });
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
  handleFootcirc = event => {
    this.setState({ footcirc: Number(event.target.value) });
  };
  handleFootlength = event => {
    this.setState({ footlength: Number(event.target.value) });
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
      this.state.footcirc <= 0 ||
      this.state.footlength <= 0 ||
      this.state.needle === "" ||
      this.state.yarn === ""
    ) {
      alert("you're missing something");
      return;
    }
    return this.props.dispatch({
      type: "dataSock-submitted",
      dataSock: {
        type: this.state.type,
        title: this.state.title,
        stitches: this.state.stitches,
        rows: this.state.rows,
        footcirc: this.state.footcirc,
        footlength: this.state.footlength,
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
            <div>* Decimals must be separated with a ".". Exemple: 3.6</div>
          </div>
          <form className="pattern-form" onSubmit={this.handleSubmitPattern}>
            <input
              type="text"
              placeholder="Whose socks are these?"
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
          <input type="text" defaultValue={this.state.footcirc} />
          <input type="text" defaultValue={this.state.footlength} />
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
let SockPatternForm = connect(mapsStateToProps)(UnconnectedSockPatternForm);
export default SockPatternForm;
