import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  if(this.state)

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.avtiveTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <section className="projects-grid">{this.toggleCategories}</section>
      </div>
    );
  }
}

export default Projects;
