import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            Left Side
          </Cell>
          <Cell className="resume-right-col" col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
