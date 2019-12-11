import React, { Component } from "react";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import "./sockpatternpage.css";

class UnconnectedBabyBlanketPattern extends Component {
  stitchesCalculation = () => {
    let stitchNumber = Math.round(
      this.props.dataBabyBlanket.stitches * this.props.dataBabyBlanket.width
    );
    if (stitchNumber % 2 !== 0) {
      return stitchNumber + 1;
    }
    return stitchNumber;
  };

  rowsCalculation = () => {
    let rowNumber = Math.round(
      this.props.dataBabyBlanket.rows * this.props.dataBabyBlanket.height
    );
    if (rowNumber % 2 !== 0) {
      return rowNumber + 1;
    }
    return rowNumber;
  };

  handleSavePattern = async evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("dataBabyBlanket", JSON.stringify(this.props.dataBabyBlanket));
    data.append("username", this.props.username);
    let response = await fetch("/pattern", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    console.log(responseBody);

    let body = JSON.parse(responseBody);
    console.log(body);

    if (!body.success) {
      alert("your pattern was not saved");
      return;
    }
    alert("pattern saved");
  };

  render = () => {
    return (
      <div className="patterntxt">
        <form onSubmit={this.handleSavePattern}>
          <div>
            <h3>
              {this.props.dataBabyBlanket.type +
                " for " +
                this.props.dataBabyBlanket.title}
            </h3>
            <div className="basicinfo">
              <img
                className="imgpattern"
                src="http://claraquintela.com/wp-content/uploads/2019/12/Blanket.jpg"
              />
              <h4>Material</h4>
              <div>needle: {this.props.dataBabyBlanket.needle} mm</div>
              <div>yarn: {this.props.dataBabyBlanket.yarn}</div>
              <h4>Gauge (in 1cm)</h4>
              <div>stitches: {this.props.dataBabyBlanket.stitches}</div>
              <div>rows: {this.props.dataBabyBlanket.rows}</div>
              <h4>Measurement</h4>
              <div>Width: {this.props.dataBabyBlanket.width} cm</div>
              <div>Height: {this.props.dataBabyBlanket.heigth} cm</div>
            </div>
            <br></br>
            <h4>Directions</h4>
            <div>
              Cast on {this.stitchesCalculation()} sts and work in garter stitch
              for {this.rowsCalculation()} rows.
            </div>
            <div>Break yarn, put it in a darn needl and weave in ends.</div>{" "}
            <br></br>
            <div className="subtitle">Variation:</div>
            <div>
              If you want to work with colors, knit the rows with one skein
              until you run out of yarn. Then, change for the second color and
              repeat the process. You can use as many colors as you wish.{" "}
            </div>
            <div className="twobuttons">
              {" "}
              <button className="saveButton">Save</button>{" "}
              <ReactToPrint
                trigger={this.props.trigger}
                content={this.props.content}
              />{" "}
            </div>
          </div>
        </form>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    dataBabyBlanket: state.dataBabyBlanket,
    username: state.username
  };
};

let BabyBlanketPattern = connect(mapStateToProps)(
  UnconnectedBabyBlanketPattern
);
export default BabyBlanketPattern;
