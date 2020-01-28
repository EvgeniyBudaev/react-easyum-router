import React, { Component } from "react";

import * as classes from "./MainLayout.module.scss";
import { Header } from "../Header";
import Main from "../../../containers/Main";

export default class MainLayout extends Component {
  render() {
    return (
      <div className={classes.MainLayout}>
        <Header />
        <Main>{this.props.children}</Main>
      </div>
    );
  }
}
