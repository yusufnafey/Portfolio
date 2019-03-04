import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>Half</Cell>
          <Cell col={6}>Half</Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
