import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/512x512/2017/02/05/878221_user_512x512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
