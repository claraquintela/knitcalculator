import React, { Component } from "react";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import "./sockpatternpage.css";

class UnconnectedMittensPattern extends Component {
  stitchesCalculation = () => {
    console.log(
      this.props.dataMittens.stitches,
      this.props.dataMittens.handcirc
    );
    let stitchNumber = Math.round(
      this.props.dataMittens.stitches * this.props.dataMittens.handcirc * 0.9
    );
    if (stitchNumber % 2 !== 0) {
      return stitchNumber + 1;
    }
    return stitchNumber;
  };

  handleSavePattern = async evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("dataMittens", JSON.stringify(this.props.dataMittens));
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
              {this.props.dataMittens.type +
                " for " +
                this.props.dataMittens.title}
            </h3>
            <div className="basicinfo">
              <img
                className="imgpattern"
                src="http://claraquintela.com/wp-content/uploads/2019/12/mittens.jpg"
              />

              <h4>Material</h4>
              <div>needle: {this.props.dataMittens.needle} mm</div>
              <div>yarn: {this.props.dataMittens.yarn}</div>
              <h4>Gauge (in 1cm)</h4>
              <div>stitches: {this.props.dataMittens.stitches}</div>
              <div>rows: {this.props.dataMittens.rows}</div>
              <h4>Measurement</h4>
              <div>
                hand circumference: {this.props.dataMittens.handcirc} cm
              </div>
            </div>
            <br></br>
            <h4>Directions</h4>
            <div className="subtitle">CUFF</div>
            <div>
              Cast on {this.stitchesCalculation()} sts and join to work in
              rounds. Put a removable marker to tell you where is the
              beginning/end of the round. Work in k2-p2 ribbing for 3-4 cm.
            </div>
            <div className="subtitle">GUSSET</div>
            <div>
              Set up round: place a marker, m1, k1, m1, place another marker,
              knit to the end of the round. Then:{" "}
            </div>
            <div>rounds 1 and 2: k next 2 rounds.</div>{" "}
            <div>
              Increase round: slip marker, m1, knit to the next marker, m1, slip
              marker, knit to the end of the round.{" "}
            </div>
            <div>Repeat these 3 rounds until you have reached your thumb.</div>
            <div className="subtitle">BODY</div>
            <div>
              Next round, put the stitches between markers on hold. Join to keep
              working in rounds.{" "}
            </div>
            <div>
              Work in stockinette st until you have reached the tip of your
              little finger. Divided the number of stitches by 2 and rearrange
              them in your needles, if necessary.{" "}
            </div>
            <div className="subtitle">TOP DECREASES</div>
            <div>
              Decrease round: [ssk, knit until 2 sts to the end of the half,
              k2tog] twice.{" "}
            </div>
            <div>K next round.</div>{" "}
            <div>
              Repeat these 2 rounds until you have reached the tip of your
              middle finger.{" "}
            </div>
            <div>
              Transfer your stitches to 2 dps and close with grafting st.
            </div>{" "}
            <div className="subtitle">THUMB</div>
            <div>
              Put the sts on hold back on 3 needles . To avoid gaps, you may
              increase 1 or 2 extra sts (but no more than this!). Join to work
              in rounds.
            </div>{" "}
            <div>
              Keep working in stockinette sts until the piece measures to the
              middle of the thumbnail. Next round, k2tog until you have half of
              initial number of sts.
            </div>{" "}
            <div>
              Break yarn, put it in a darn needle, pass it through all sts and
              close the hole tight.
            </div>{" "}
            <div>Weave in ends.</div>{" "}
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
    dataMittens: state.dataMittens,
    username: state.username
  };
};

let MittensPattern = connect(mapStateToProps)(UnconnectedMittensPattern);
export default MittensPattern;
