import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../../containers/Home";
import About from "../../containers/About";
import NotFound from "../../containers/NotFound";
import { ROUTES } from "../../util/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home></Home>
            </Route>
            <Route exact path={ROUTES.ABOUT}>
              <About></About>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default withRouter(App);
