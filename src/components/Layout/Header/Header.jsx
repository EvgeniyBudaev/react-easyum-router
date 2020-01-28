import React from "react";

import * as classes from "./Header.module.scss";
import Nav from "./Nav/Nav";

export const Header = () => {
  return (
    <header className={classes.Header}>
      <Nav />
    </header>
  );
};
