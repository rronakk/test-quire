import React, { Component, Fragment } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home"
import { Grommet } from 'grommet';



class App extends Component {
  render() {
    return (
      <div>
          <div>
            <BrowserRouter>
              <Grommet plain>
                <Route exact path="/" component={Home} />
                {/*<Route exact path="/project" component={Project} />*/}
              </Grommet>
            </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
