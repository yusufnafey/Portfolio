import React, { Component } from "react";
import "./App.scss";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";
import { black } from "ansi-colors";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

// fix font sizes
// fix css reset
// change position in app.css for these pages from fixed to relative (landing page and contact page?)

export default App;
