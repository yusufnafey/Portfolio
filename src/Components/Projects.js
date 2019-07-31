import React, { Component } from "react";
import {
  // Tabs,
  // Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  // toggleCategories() {
  //   if (this.state.activeTab === 0) {
  //     return (
  //       <div className="projects-grid">
  //         {/* Project 1 */}
  //         <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
  //           <CardTitle
  //             style={{
  //               color: "black",
  //               height: "235px",
  //               background: "url(kwc.png) center / cover"
  //             }}
  //           >
  //             Knowledge Without College
  //           </CardTitle>
  //           <CardText>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry. Lorem Ipsum has been the industry's standard dummy text
  //             ever since the 1500s, when an unknown printer took a galley of
  //             type and scrambled it to make a type specimen book.
  //           </CardText>
  //           <CardActions
  //             border
  //             style={{
  //               textAlign: "center"
  //             }}
  //           >
  //             <Button colored>
  //               <a
  //                 colored
  //                 href="https://github.com/Lambda-School-Labs/labs9-job-board"
  //                 target="_blank"
  //                 style={{ textDecoration: "none", color: "#3F51B5" }}
  //               >
  //                 GitHub
  //               </a>
  //             </Button>
  //             <Button colored>
  //               <a
  //                 href="https://knowledge-without-college.netlify.com"
  //                 target="_blank"
  //                 style={{ textDecoration: "none", color: "#3F51B5" }}
  //               >
  //                 Live Demo
  //               </a>
  //             </Button>
  //           </CardActions>
  //           <CardMenu style={{ color: "#fff" }}>
  //             <IconButton name="share" />
  //           </CardMenu>
  //         </Card>
  //         {/* Project 2 */}
  //         <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
  //           <CardTitle
  //             style={{
  //               color: "black",
  //               height: "235px",
  //               background: "url(online-store.png) center / cover"
  //             }}
  //           >
  //             Online Store
  //           </CardTitle>
  //           <CardText>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry. Lorem Ipsum has been the industry's standard dummy text
  //             ever since the 1500s, when an unknown printer took a galley of
  //             type and scrambled it to make a type specimen book.
  //           </CardText>
  //           <CardActions
  //             border
  //             style={{
  //               textAlign: "center"
  //             }}
  //           >
  //             <Button colored>
  //               <a
  //                 colored
  //                 href="https://github.com/yusufnafey/Online-Store"
  //                 target="_blank"
  //                 style={{ textDecoration: "none", color: "#3F51B5" }}
  //               >
  //                 GitHub
  //               </a>
  //             </Button>
  //             <Button colored>
  //               <a
  //                 href="https://online-store-yusuf.netlify.com"
  //                 target="_blank"
  //                 style={{ textDecoration: "none", color: "#3F51B5" }}
  //               >
  //                 Live Demo
  //               </a>
  //             </Button>
  //           </CardActions>
  //           <CardMenu style={{ color: "#fff" }}>
  //             <IconButton name="share" />
  //           </CardMenu>
  //         </Card>
  //       </div>
  //     );
  //   }

  // else if (this.state.activeTab === 1) {
  //   return (
  //     <div className="projects-grid">
  //       {/* Project 1 */}
  //       <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
  //         <CardTitle
  //           style={{
  //             color: "black",
  //             height: "235px",
  //             background:
  //               "url(https://cdn.iconscout.com/icon/free/png-256/angular-226066.png) center / cover"
  //           }}
  //         >
  //           Angular Project #1
  //         </CardTitle>
  //         <CardText>
  //           Lorem Ipsum is simply dummy text of the printing and typesetting
  //           industry. Lorem Ipsum has been the industry's standard dummy text
  //           ever since the 1500s, when an unknown printer took a galley of
  //           type and scrambled it to make a type specimen book.
  //         </CardText>
  //         <CardActions
  //           border
  //           style={{
  //             textAlign: "center"
  //           }}
  //         >
  //           <Button colored>GitHub</Button>
  //           <Button colored>CodePen</Button>
  //           <Button colored>LiveDemo</Button>
  //         </CardActions>
  //         <CardMenu style={{ color: "#fff" }}>
  //           <IconButton name="share" />
  //         </CardMenu>
  //       </Card>
  //       {/* Project 2 */}
  //       <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
  //         <CardTitle
  //           style={{
  //             color: "black",
  //             height: "235px",
  //             background:
  //               "url(http://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png) center / cover"
  //           }}
  //         >
  //           Angular Project #2
  //         </CardTitle>
  //         <CardText>
  //           Lorem Ipsum is simply dummy text of the printing and typesetting
  //           industry. Lorem Ipsum has been the industry's standard dummy text
  //           ever since the 1500s, when an unknown printer took a galley of
  //           type and scrambled it to make a type specimen book.
  //         </CardText>
  //         <CardActions
  //           border
  //           style={{
  //             textAlign: "center"
  //           }}
  //         >
  //           <Button colored>GitHub</Button>
  //           <Button colored>CodePen</Button>
  //           <Button colored>LiveDemo</Button>
  //         </CardActions>
  //         <CardMenu style={{ color: "#fff" }}>
  //           <IconButton name="share" />
  //         </CardMenu>
  //       </Card>
  //       {/* Project 3 */}
  //       <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
  //         <CardTitle
  //           style={{
  //             color: "black",
  //             height: "235px",
  //             background:
  //               "url(https://blog.savoirfairelinux.com/en-ca/wp-content/uploads/sites/2/2017/12/angular-logo.png) center / cover"
  //           }}
  //         >
  //           Angular Project #3
  //         </CardTitle>
  //         <CardText>
  //           Lorem Ipsum is simply dummy text of the printing and typesetting
  //           industry. Lorem Ipsum has been the industry's standard dummy text
  //           ever since the 1500s, when an unknown printer took a galley of
  //           type and scrambled it to make a type specimen book.
  //         </CardText>
  //         <CardActions
  //           border
  //           style={{
  //             textAlign: "center"
  //           }}
  //         >
  //           <Button colored>GitHub</Button>
  //           <Button colored>CodePen</Button>
  //           <Button colored>LiveDemo</Button>
  //         </CardActions>
  //         <CardMenu style={{ color: "#fff" }}>
  //           <IconButton name="share" />
  //         </CardMenu>
  //       </Card>
  //     </div>
  //   );
  // } else if (this.state.activeTab === 2) {
  //   return (
  //     <div>
  //       <h1>This is VueJS</h1>
  //     </div>
  //   );
  // } else if (this.state.activeTab === 3) {
  //   return (
  //     <div>
  //       <h1>This is MongoDB</h1>
  //     </div>
  //   );
  // }
  // }

  render() {
    return (
      <div className="category-tabs">
        <Grid>
          <Cell col={12}>
            <div className="content">
              <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "black",
                      height: "235px",
                      background: "url(kwc.png) center / cover"
                    }}
                  >
                    Knowledge Without College
                  </CardTitle>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </CardText>
                  <CardActions
                    border
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Button colored>
                      <a
                        colored
                        href="https://github.com/Lambda-School-Labs/labs9-job-board"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3F51B5" }}
                      >
                        GitHub
                      </a>
                    </Button>
                    <Button colored>
                      <a
                        href="https://knowledge-without-college.netlify.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3F51B5" }}
                      >
                        Live Demo
                      </a>
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "black",
                      height: "235px",
                      background: "url(online-store.png) center / cover"
                    }}
                  >
                    Online Store
                  </CardTitle>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </CardText>
                  <CardActions
                    border
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Button colored>
                      <a
                        colored
                        href="https://github.com/yusufnafey/Online-Store"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3F51B5" }}
                      >
                        GitHub
                      </a>
                    </Button>
                    <Button colored>
                      <a
                        href="https://online-store-yusuf.netlify.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3F51B5" }}
                      >
                        Live Demo
                      </a>
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>

      // <div className="category-tabs">
      //   <Tabs
      //     activeTab={this.state.activeTab}
      //     onChange={tabId => this.setState({ activeTab: tabId })}
      //     ripple
      //   >
      //     <Tab>React</Tab>
      //     {/* <Tab>Angular</Tab>
      //     <Tab>VueJS</Tab>
      //     <Tab>MongoDB</Tab> */}
      //   </Tabs>
      //   <Grid>
      //     <Cell col={12}>
      //       <div className="content">{this.toggleCategories()}</div>
      //     </Cell>
      //   </Grid>
      // </div>
    );
  }
}

export default Projects;
