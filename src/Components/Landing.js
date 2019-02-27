import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/simplius-pack/512/user-512.png"
              alt="avatar"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
