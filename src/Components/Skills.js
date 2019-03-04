import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="skills">
            {this.props.skill}{" "}
            <ProgressBar className="progress-bar" progress={44} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
