import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="skills">
            <div>{this.props.skill}</div>
            <div className="progress-bar-container">
              <ProgressBar
                className="progress-bar"
                progress={this.props.progress}
              />
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
