import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>Hello</Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
