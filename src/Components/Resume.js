import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div className="left-div">
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
              />
            </div>
            <h2>Yusuf Nafey</h2>
            <h4>Programmer</h4>
            <hr />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <hr />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(925) 876-1161</p>
            <h5>Email</h5>
            <p>yusufnafey@gmail.com</p>
            <h5>Web</h5>
            <p>google.com</p>
            <hr />
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
