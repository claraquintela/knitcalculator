import React, { Component } from "react";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import "./sockpatternpage.css";

class UnconnectedSockPattern extends Component {
  stitchesCalculation = () => {
    let stitchNumber = Math.round(
      this.props.dataSock.stitches * this.props.dataSock.footcirc * 0.9
    );
    if (stitchNumber % 2 !== 0) {
      return stitchNumber + 1;
    }
    return stitchNumber;
  };

  // rowsCalculation = () => {
  //   let rowNumber = Math.round(
  //     this.props.data.rows * this.props.data.footlength
  //   );
  //   if (stitchNumber % 2 !== 0) {
  //     return stitchNumber + 1;
  //   }
  //   return stitchNumber;
  // };

  handleSavePattern = async evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("dataSock", JSON.stringify(this.props.dataSock));
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
              {this.props.dataSock.type + " for " + this.props.dataSock.title}
            </h3>
            <div className="basicinfo">
              <img
                className="imgpattern"
                src="http://claraquintela.com/wp-content/uploads/2019/12/socks.jpg"
              />
              <h4>Material</h4>
              <div>needle: {this.props.dataSock.needle} mm</div>
              <div>yarn: {this.props.dataSock.yarn}</div>
              <h4>Gauge (in 1cm)</h4>
              <div>stitches: {this.props.dataSock.stitches}</div>
              <div>rows: {this.props.dataSock.rows}</div>
              <h4>Measurement</h4>
              <div>foot circumference: {this.props.dataSock.footcirc} cm </div>
              <div>foot length: {this.props.dataSock.footlength} cm</div>
            </div>
            {""}
            <br></br>
            <h4>Directions</h4>
            <div className="subtitle">CUFF</div>
            <div>
              Cast on {this.stitchesCalculation()} sts and join to work in
              rounds. Put a removable marker to tell you where is the
              beginning/end of the round. Work in k2-p2 (or k1-p1) ribbing for
              3cm (or as much as desired).
            </div>
            <div className="subtitle">LEG</div>
            <div>K next 10cm (or as much as desired).</div>
            <div className="subtitle"> HEEL </div>
            <div>Heel flap </div>
            <div>Next round, put half of the stitches on hold. </div>
            <div>Row1: *sl 1 purlwise wyib, k1* </div>
            <div>Row 2: sl 1 purlwise wyib, p to the end of the row. </div>
            Repeat these two rows{" "}
            {Math.round(this.stitchesCalculation() / 4) - 1}
            times more or until you have a square.
            <div>Heel turn </div>
            <div>
              Divide the number of stitches by 3 in one needle (NOTE: if the
              number is not divisible by 3, put the difference in the middle).
              Knit ⅓ of the stitches, then{" "}
            </div>
            <div>
              knit the central stitches up to 1 st before the last ⅓. Ssk. Turn.{" "}
            </div>
            <div>
              row 1: purl central sts up to 1 st before the first ⅓. P2tog.
              Turn.{" "}
            </div>
            <div>
              Repeate these 2 rows until you have only the central stitches (1/3
              of heel flap stitches).
            </div>
            <div className="subtitle">GUSSET</div>
            <div>
              {" "}
              Turn you sock 90º. Pick up and knit one st every other row (total
              ={Math.round(this.stitchesCalculation() / 4)} ). Place a marker.
              Then, knit the instep sts. Place another marker. Turn your sock
              again, pick up and knit one st every other row. K up to 3 sts
              before the first marker. This is gonna be the beginning of your
              round. NOTE that now you have more stitches than when you started
              knitting. The gusset is nothing more than a adjustment in the
              number of stitches to the shape of your feet.{" "}
            </div>
            <div>
              round 1: k2tog, k1, sl m, k up to the marker, sl m, k1, ssk, k up
              to the marker. (2 decreases){" "}
            </div>
            <div>
              round 2: k. Repeat these 2 rounds until you have the same amount
              of sts you had in the beginning.
            </div>
            <div className="subtitle">FEET</div>
            <div>
              K next rounds until the socks reach the bottom of your toes.{" "}
            </div>
            <div className="subtitle">DECREASE FOR TOES</div>
            <div>
              Decrease round (starting 3 sts from the first marker): k2tog, k1,
              sl m, k1, ssk, k up 3 sts to the second marker, k2tog, k1, sl m,
              k1, ssk, k to the end of the round. (4 decreases) K next round.{" "}
            </div>
            <div>
              Repeat these 2 rounds until you have reached the tip of your toes.
              Transfer your stitches to 2 dps and close with grafting st.
            </div>
          </div>
          <div className="twobuttons">
            {" "}
            <button className="saveButton">Save</button>{" "}
            <ReactToPrint
              trigger={this.props.trigger}
              content={this.props.content}
            />{" "}
          </div>
        </form>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    dataSock: state.dataSock,
    username: state.username
  };
};

let SockPattern = connect(mapStateToProps)(UnconnectedSockPattern);
export default SockPattern;
