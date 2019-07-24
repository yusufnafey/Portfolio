import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
// import Skills from "./Skills";

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
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="San Jose City College"
              schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            />
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Lambda School"
              schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            />
            <hr />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <Experience
              startYear={2013}
              endYear={2015}
              jobName="Second Job"
              jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <hr />
            <h2>Skills</h2>
            <p>HTML</p>
            {/* <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="JavaScript" progress={100} />
            <Skills skill="React" progress={75} />
            <Skills skill="NodeJS" progress={50} /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
