import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="me.jpg" alt="avatar" className="avatar-img rounded" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | MongoDB{" "}
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yusufnafey/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="https://github.com/yusufnafey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-square" />
                </a>
                <a
                  href="https://twitter.com/YusufNafey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter-square" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
