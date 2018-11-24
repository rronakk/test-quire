import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { Link, Route } from "react-router-dom";
// import Library from "./Library";
// import API from "../../actions/API";
import { Box, Button, Grommet } from 'grommet';


import test_quire from "../../img/test_quire.png";

class Project extends Component {
  state = {
    projects: [],
    selectedProject: "",
    pLibraries: [],
    libraryLoaded: false
  };


  renderNav() {
    return (
      <Box>
        {/* LOGO && LOGIN */}
        <div className="nav-wrapper grey darken-4" align="center">
          <div href="#" className="brand-logo" >
            <img src={test_quire} style={{ height: "66px", width: "370px" }} />
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </Box>
    );
  }
  render() {
    return (
      <Box>
        <nav className="nav-extended" style={{ background: "black" }}>

        {this.renderNav()}
        </nav>
      </Box>
    );
  }
}

export default (Project);
